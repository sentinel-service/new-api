package router

import (
	"embed"
	"net/http"
	"strings"

	"github.com/QuantumNous/new-api/common"
	"github.com/QuantumNous/new-api/controller"
	"github.com/QuantumNous/new-api/middleware"
	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func redirectAnonymousProtectedWebPages() gin.HandlerFunc {
	protectedPaths := map[string]bool{
		"/":                                     true,
		"/pricing":                              true,
		"/docs/cc-switch-jiekoutong-guide.html": true,
	}

	return func(c *gin.Context) {
		requestPath := c.Request.URL.Path
		if requestPath != "/" {
			requestPath = strings.TrimRight(requestPath, "/")
		}

		if protectedPaths[requestPath] && sessions.Default(c).Get("id") == nil {
			c.Header("Cache-Control", "no-cache")
			c.Redirect(http.StatusFound, "/login")
			c.Abort()
			return
		}

		c.Next()
	}
}

func SetWebRouter(router *gin.Engine, buildFS embed.FS, indexPage []byte) {
	router.Use(gzip.Gzip(gzip.DefaultCompression))
	router.Use(middleware.GlobalWebRateLimit())
	router.Use(middleware.Cache())
	router.Use(redirectAnonymousProtectedWebPages())
	router.Use(static.Serve("/", common.EmbedFolder(buildFS, "web/dist")))
	router.NoRoute(func(c *gin.Context) {
		c.Set(middleware.RouteTagKey, "web")
		if strings.HasPrefix(c.Request.RequestURI, "/v1") || strings.HasPrefix(c.Request.RequestURI, "/api") || strings.HasPrefix(c.Request.RequestURI, "/assets") {
			controller.RelayNotFound(c)
			return
		}
		blockedPaths := map[string]bool{
			"/cashier":           true,
			"/terms-of-service":  true,
			"/privacy-agreement": true,
		}
		requestPath := c.Request.URL.Path
		if requestPath != "/" {
			requestPath = strings.TrimRight(requestPath, "/")
		}
		if blockedPaths[requestPath] {
			c.AbortWithStatus(http.StatusNotFound)
			return
		}
		c.Header("Cache-Control", "no-cache")
		c.Data(http.StatusOK, "text/html; charset=utf-8", indexPage)
	})
}

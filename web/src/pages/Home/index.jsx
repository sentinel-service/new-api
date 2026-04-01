/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Button, Input, ScrollItem, ScrollList } from '@douyinfe/semi-ui';
import { IconCopy } from '@douyinfe/semi-icons';
import { Link } from 'react-router-dom';
import { marked } from 'marked';
import { useTranslation } from 'react-i18next';
import { API, copy, showError, showSuccess } from '../../helpers';
import { useIsMobile } from '../../hooks/common/useIsMobile';
import { API_ENDPOINTS } from '../../constants/common.constant';
import { StatusContext } from '../../context/Status';
import { useActualTheme } from '../../context/Theme';
import NoticeModal from '../../components/layout/NoticeModal';

const stats = [
  {
    value: '$1M+',
    label: '日供应量',
    sub: '百万美元级 API 额度',
  },
  {
    value: '99.97%',
    label: '服务可用性',
    sub: 'SLA 企业级保障',
  },
  {
    value: '24/7',
    label: '专人运维',
    sub: '全天候技术支持',
  },
  {
    value: '50+',
    label: '支持模型',
    sub: '覆盖全球主流大模型',
  },
];

const whyCards = [
  {
    icon: '🏭',
    iconClass: 'src',
    title: '源头供应商',
    desc: '接口通AI直接对接 Anthropic、Google、OpenAI 等大模型厂商，是国内领先的大模型API源头供应商。不经中间商，价格更优、延迟更低、稳定性更高。',
    highlight: '直连官方 · 零中间环节',
  },
  {
    icon: '📊',
    iconClass: 'vol',
    title: '日供百万刀级',
    desc: '日均 API 调用供应量超过百万美元级别，支撑超大规模业务并发。无论是初创团队还是亿级流量平台，接口通AI都能满足您的用量需求。',
    highlight: '百万刀/日 · 弹性扩容',
  },
  {
    icon: '🏢',
    iconClass: 'ent',
    title: '上市公司信赖',
    desc: '已为多家A股和港股上市公司提供稳定的AI大模型接口服务，经受住了真实业务场景的严苛考验。企业级客户的选择，就是最好的背书。',
    highlight: '多家上市公司合作伙伴',
  },
  {
    icon: '🛡️',
    iconClass: 'sup',
    title: '24小时专人维护',
    desc: '每天24小时配备专业运维团队，实时监控所有接口通道状态。故障秒级响应，保障您的业务永不中断。这是接口通AI对稳定性的承诺。',
    highlight: '24/7 人工值守 · 秒级响应',
  },
];

const models = [
  { name: 'Claude 4 Opus', dot: 'claude' },
  { name: 'Claude 3.5 Sonnet', dot: 'claude' },
  { name: 'GPT-4o', dot: 'gpt' },
  { name: 'GPT-o1', dot: 'gpt' },
  { name: 'Gemini 2.5 Pro', dot: 'gemini' },
  { name: 'Gemini 2.0 Flash', dot: 'gemini' },
  { name: 'DeepSeek V3', dot: 'deepseek' },
  { name: 'DeepSeek R1', dot: 'deepseek' },
  { name: 'Llama 3.1 405B', dot: 'llama' },
  { name: 'Qwen 2.5', dot: 'qwen' },
  { name: 'Mistral Large', dot: 'mistral' },
  { name: 'Grok-2', dot: 'grok' },
];

const modelFeatures = [
  {
    icon: '🔄',
    title: 'OpenAI 兼容格式',
    desc: '所有模型统一使用 OpenAI API 格式，一次接入即可切换任意模型，零迁移成本',
  },
  {
    icon: '⚡',
    title: '智能负载均衡',
    desc: '接口通AI自动分配最优通道，多节点冗余保障，单模型多通道无缝切换',
  },
  {
    icon: '📈',
    title: '持续更新',
    desc: '新模型上线后第一时间接入，让您始终走在AI技术前沿，抢占先机',
  },
];

const useCases = [
  {
    icon: '🎬',
    title: 'AI漫剧制作',
    desc: '利用大模型接口生成剧本、分镜和角色对话，打造自动化AI漫剧生产流水线',
  },
  {
    icon: '📝',
    title: '学术论文写作',
    desc: '接入Claude等模型辅助论文选题、文献综述、内容润色和格式调整',
  },
  {
    icon: '🦞',
    title: 'OpenClaw 养小龙虾',
    desc: '用接口通AI的大模型接口驱动 OpenClaw 智能体，让你的AI小龙虾 Agent 全天候自主运行',
  },
  {
    icon: '🤖',
    title: 'AI Agent 自动化',
    desc: '为各类AI Agent提供稳定的大模型API底座，支撑复杂多步推理和工具调用',
  },
  {
    icon: '💬',
    title: '智能客服系统',
    desc: '接口通AI接口驱动的智能客服，7×24小时服务，大幅降低人工成本',
  },
  {
    icon: '📊',
    title: '数据分析与报告',
    desc: '通过大模型接口自动分析业务数据，生成专业报告和可视化图表',
  },
];

const Home = () => {
  const { t, i18n } = useTranslation();
  const [statusState] = useContext(StatusContext);
  const actualTheme = useActualTheme();
  const [homePageContentLoaded, setHomePageContentLoaded] = useState(false);
  const [homePageContent, setHomePageContent] = useState('');
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [endpointIndex, setEndpointIndex] = useState(0);
  const isMobile = useIsMobile();
  const serverAddress =
    statusState?.status?.server_address || `${window.location.origin}`;
  const endpointItems = useMemo(
    () => API_ENDPOINTS.map((item) => ({ value: item })),
    [],
  );
  const codeExample = useMemo(
    () => `# ${t('接口通AI — 三行代码即刻接入')}
from openai import OpenAI

client = OpenAI(
    base_url="${serverAddress}",
    api_key="your-api-key"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-20250514",
    messages=[{
        "role": "user",
        "content": "${t('你好，接口通！')}"
    }]
)

print(response.choices[0].message.content)`,
    [serverAddress, t],
  );

  const displayHomePageContent = async () => {
    setHomePageContent(localStorage.getItem('home_page_content') || '');
    const res = await API.get('/api/home_page_content');
    const { success, message, data } = res.data;
    if (success) {
      let content = data;
      if (!data.startsWith('https://')) {
        content = marked.parse(data);
      }
      setHomePageContent(content);
      localStorage.setItem('home_page_content', content);

      if (data.startsWith('https://')) {
        const iframe = document.querySelector('iframe');
        if (iframe) {
          iframe.onload = () => {
            iframe.contentWindow.postMessage({ themeMode: actualTheme }, '*');
            iframe.contentWindow.postMessage({ lang: i18n.language }, '*');
          };
        }
      }
    } else {
      showError(message);
      setHomePageContent('加载首页内容失败...');
    }
    setHomePageContentLoaded(true);
  };

  const handleCopyBaseURL = async () => {
    const ok = await copy(serverAddress);
    if (ok) {
      showSuccess(t('已复制到剪切板'));
    }
  };

  useEffect(() => {
    const checkNoticeAndShow = async () => {
      const lastCloseDate = localStorage.getItem('notice_close_date');
      const today = new Date().toDateString();
      if (lastCloseDate !== today) {
        try {
          const res = await API.get('/api/notice');
          const { success, data } = res.data;
          if (success && data && data.trim() !== '') {
            setNoticeVisible(true);
          }
        } catch (error) {
          console.error('获取公告失败:', error);
        }
      }
    };

    checkNoticeAndShow();
  }, []);

  useEffect(() => {
    displayHomePageContent().then();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setEndpointIndex((prev) => (prev + 1) % endpointItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [endpointItems.length]);

  useEffect(() => {
    if (!(homePageContentLoaded && homePageContent === '')) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );
    const elements = document.querySelectorAll('.home-reveal');
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [homePageContentLoaded, homePageContent]);

  return (
    <div className='w-full overflow-x-hidden'>
      <style>
        {`
          .home-wrapper {
            background: #f8fafd;
            color: #1a1d2e;
            line-height: 1.7;
            overflow-x: hidden;
            position: relative;
          }

          .home-wrapper::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background:
              radial-gradient(ellipse 80% 60% at 20% 10%, rgba(0, 102, 255, 0.05), transparent),
              radial-gradient(ellipse 60% 50% at 80% 30%, rgba(108, 92, 231, 0.04), transparent),
              radial-gradient(ellipse 70% 40% at 50% 80%, rgba(232, 67, 147, 0.03), transparent);
            pointer-events: none;
            z-index: 0;
          }

          .home-wrapper::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 0;
          }

          .home-shell {
            position: relative;
            z-index: 1;
          }

          .home-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .home-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .home-reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .home-hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 64px;
            position: relative;
            overflow: hidden;
          }

          .home-hero-grid {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(0, 102, 255, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 102, 255, 0.06) 1px, transparent 1px);
            background-size: 60px 60px;
            mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);
          }

          .home-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            animation: homeOrbFloat 8s ease-in-out infinite alternate;
          }

          .home-orb-1 {
            width: 400px;
            height: 400px;
            background: rgba(0, 102, 255, 0.08);
            top: 10%;
            left: 5%;
          }

          .home-orb-2 {
            width: 300px;
            height: 300px;
            background: rgba(108, 92, 231, 0.06);
            top: 30%;
            right: 10%;
            animation-delay: 3s;
          }

          .home-orb-3 {
            width: 250px;
            height: 250px;
            background: rgba(232, 67, 147, 0.05);
            bottom: 10%;
            left: 40%;
            animation-delay: 5s;
          }

          .home-hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }

          .home-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(0, 102, 255, 0.08);
            border: 1px solid rgba(0, 102, 255, 0.15);
            border-radius: 100px;
            padding: 8px 20px;
            font-size: 0.82rem;
            color: #0066ff;
            font-weight: 500;
            margin-bottom: 32px;
          }

          .home-pulse {
            width: 8px;
            height: 8px;
            background: #00b85e;
            border-radius: 50%;
            animation: homePulse 2s infinite;
          }

          .home-title {
            font-size: clamp(2.8rem, 6vw, 4.8rem);
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: -2px;
            margin-bottom: 24px;
          }

          .home-gradient-text {
            background: linear-gradient(135deg, #0066ff 0%, #6c5ce7 50%, #e84393 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .home-subtitle {
            font-size: clamp(1.05rem, 2vw, 1.3rem);
            color: #5a6178;
            max-width: 680px;
            margin: 0 auto 40px;
            line-height: 1.8;
          }

          .home-subtitle strong {
            color: #1a1d2e;
            font-weight: 700;
          }

          .home-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 48px;
          }

          .home-primary-btn,
          .home-secondary-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }

          .home-primary-btn .semi-button {
            background: linear-gradient(135deg, #0066ff 0%, #6c5ce7 50%, #e84393 100%);
            border: none;
            color: #fff;
            border-radius: 100px;
            height: 54px;
            padding: 0 40px;
            font-size: 1rem;
            font-weight: 700;
            box-shadow: 0 12px 40px rgba(0, 102, 255, 0.25);
          }

          .home-secondary-btn .semi-button {
            background: transparent;
            color: #1a1d2e;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 100px;
            height: 54px;
            padding: 0 40px;
            font-size: 1rem;
            font-weight: 600;
          }

          .home-demo-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
            margin-top: 16px;
          }

          .home-demo-text h3 {
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .home-demo-text p {
            color: #5a6178;
            margin-bottom: 24px;
            line-height: 1.8;
          }

          .home-demo-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 24px;
          }

          .home-demo-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #5a6178;
            font-size: 0.92rem;
          }

          .home-check {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: rgba(0, 184, 94, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #00b85e;
            font-size: 13px;
            flex-shrink: 0;
          }

          .home-base-box {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .home-code-block {
            background: #1a1d2e;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 32px;
            font-size: 0.82rem;
            line-height: 1.9;
            overflow-x: auto;
            color: #e0e4f0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .home-stats {
            padding: 60px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            background: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          }

          .home-stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            text-align: center;
          }

          .home-stat-number {
            font-size: clamp(2rem, 4vw, 3.2rem);
            font-weight: 900;
            background: linear-gradient(135deg, #0066ff 0%, #6c5ce7 50%, #e84393 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
          }

          .home-stat-label {
            font-size: 0.9rem;
            color: #5a6178;
            margin-top: 8px;
          }

          .home-stat-sub {
            font-size: 0.78rem;
            color: #9ca3b8;
            margin-top: 4px;
          }

          .home-section {
            padding: 120px 0;
          }

          .home-section.models {
            background: #f0f4fa;
          }

          .home-section.api {
            background: #f0f4fa;
          }

          .home-section-header {
            text-align: center;
            margin-bottom: 72px;
          }

          .home-section-tag {
            display: inline-block;
            font-size: 0.78rem;
            text-transform: uppercase;
            color: #0066ff;
            letter-spacing: 3px;
            margin-bottom: 16px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
          }

          .home-section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            letter-spacing: -1px;
            margin-bottom: 16px;
          }

          .home-section-desc {
            font-size: 1.05rem;
            color: #5a6178;
            max-width: 600px;
            margin: 0 auto;
          }

          .home-why-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .home-why-card {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 16px;
            padding: 48px 40px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .home-why-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(135deg, #0066ff 0%, #6c5ce7 50%, #e84393 100%);
            opacity: 0;
            transition: opacity 0.3s;
          }

          .home-why-card:hover::before {
            opacity: 1;
          }

          .home-why-icon {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            margin-bottom: 20px;
          }

          .home-why-icon.src {
            background: rgba(0, 102, 255, 0.08);
            border: 1px solid rgba(0, 102, 255, 0.15);
          }

          .home-why-icon.vol {
            background: rgba(108, 92, 231, 0.08);
            border: 1px solid rgba(108, 92, 231, 0.15);
          }

          .home-why-icon.ent {
            background: rgba(0, 184, 94, 0.08);
            border: 1px solid rgba(0, 184, 94, 0.15);
          }

          .home-why-icon.sup {
            background: rgba(232, 67, 147, 0.08);
            border: 1px solid rgba(232, 67, 147, 0.15);
          }

          .home-why-card h3 {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .home-why-card p {
            color: #5a6178;
            font-size: 0.95rem;
            line-height: 1.8;
          }

          .home-highlight {
            display: inline-block;
            margin-top: 16px;
            font-size: 0.82rem;
            color: #0066ff;
            padding: 6px 14px;
            background: rgba(0, 102, 255, 0.08);
            border: 1px solid rgba(0, 102, 255, 0.12);
            border-radius: 100px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
          }

          .home-marquee-wrap {
            overflow: hidden;
            position: relative;
            margin-bottom: 48px;
          }

          .home-marquee {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: homeMarquee 30s linear infinite;
          }

          .home-model-chip {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 100px;
            padding: 12px 24px;
            font-size: 0.9rem;
            font-weight: 600;
            white-space: nowrap;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          }

          .home-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            flex-shrink: 0;
          }

          .home-dot.claude { background: #d97706; }
          .home-dot.gpt { background: #10b981; }
          .home-dot.gemini { background: #6366f1; }
          .home-dot.deepseek { background: #06b6d4; }
          .home-dot.llama { background: #f43f5e; }
          .home-dot.qwen { background: #8b5cf6; }
          .home-dot.mistral { background: #f59e0b; }
          .home-dot.grok { background: #ec4899; }

          .home-model-features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .home-model-feature {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            padding: 28px;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          }

          .home-model-feature h4 {
            font-size: 1rem;
            font-weight: 700;
            margin: 12px 0 8px;
          }

          .home-model-feature p {
            font-size: 0.85rem;
            color: #5a6178;
            line-height: 1.6;
          }

          .home-usecases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .home-usecase-card {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 16px;
            padding: 36px 28px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          }

          .home-usecase-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(135deg, #0066ff 0%, #6c5ce7 50%, #e84393 100%);
            transform: scaleX(0);
            transition: transform 0.3s;
          }

          .home-usecase-card:hover::after {
            transform: scaleX(1);
          }

          .home-usecase-icon {
            font-size: 40px;
            margin-bottom: 16px;
            display: block;
          }

          .home-usecase-card h3 {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 10px;
          }

          .home-usecase-card p {
            font-size: 0.88rem;
            color: #5a6178;
            line-height: 1.7;
          }

          .home-cta {
            padding: 120px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .home-cta::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 102, 255, 0.05), transparent);
          }

          .home-cta h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 900;
            letter-spacing: -1px;
            margin-bottom: 16px;
            position: relative;
          }

          .home-cta p {
            color: #5a6178;
            font-size: 1.1rem;
            margin-bottom: 40px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
          }

          .home-cta-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
            position: relative;
          }

          @keyframes homeOrbFloat {
            0% { transform: translate(0, 0); }
            100% { transform: translate(30px, -40px); }
          }

          @keyframes homePulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.5);
            }
          }

          @keyframes homeMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            .home-demo-grid,
            .home-why-grid,
            .home-model-features,
            .home-usecases-grid,
            .home-stats-grid {
              grid-template-columns: 1fr;
            }

            .home-stats-grid {
              gap: 24px;
            }

            .home-title {
              letter-spacing: -1px;
            }
          }
        `}
      </style>
      <NoticeModal
        visible={noticeVisible}
        onClose={() => setNoticeVisible(false)}
        isMobile={isMobile}
      />
      {homePageContentLoaded && homePageContent === '' ? (
        <div className='home-wrapper'>
          <div className='home-shell'>
            <section className='home-hero'>
              <div className='home-hero-grid' />
              <div className='home-orb home-orb-1' />
              <div className='home-orb home-orb-2' />
              <div className='home-orb home-orb-3' />
              <div className='home-container'>
                <div className='home-hero-content'>
                  <div className='home-badge home-reveal'>
                    <span className='home-pulse' />
                    {t('大模型API源头供应商 · 全线模型实时在线')}
                  </div>
                  <h1 className='home-title home-reveal'>
                    <span className='home-gradient-text'>{t('接口通AI')}</span>
                    <br />
                    {t('企业级大模型接口中转平台')}
                  </h1>
                  <p className='home-subtitle home-reveal'>
                    <strong>{t('接口通')}</strong>
                    {t('是大模型API的')}
                    <strong>{t('源头供应商')}</strong>
                    {t('，日供应量超')}
                    <strong>{t('百万美元')}</strong>
                    {t('级别。')}
                    <br />
                    {t(
                      '为多家上市公司提供稳定的AI中转接口服务，支持 Claude、Gemini、GPT 等全球主流大模型。',
                    )}
                  </p>
                  <div className='home-actions home-reveal'>
                    <Link to='/login' className='home-primary-btn'>
                      <Button>{t('立即接入')}</Button>
                    </Link>
                    <Link to='/login' className='home-secondary-btn'>
                      <Button>{t('免费试用')}</Button>
                    </Link>
                  </div>
                  <div className='home-demo-grid'>
                    <div className='home-demo-text home-reveal'>
                      <div className='home-section-tag'>{t('// Quick Start')}</div>
                      <h3>{t('三分钟接入接口通AI')}</h3>
                      <p>
                        {t(
                          '兼容 OpenAI SDK，只需替换 base_url 和 api_key，即刻接入全球主流AI大模型接口。无需改动任何业务代码。',
                        )}
                      </p>
                      <ul className='home-demo-list'>
                        <li>
                          <span className='home-check'>✓</span>
                          {t('OpenAI 兼容，无缝切换')}
                        </li>
                        <li>
                          <span className='home-check'>✓</span>
                          {t('支持 Stream / 非 Stream 模式')}
                        </li>
                        <li>
                          <span className='home-check'>✓</span>
                          {t('接口通AI中转延迟 < 50ms')}
                        </li>
                        <li>
                          <span className='home-check'>✓</span>
                          {t('自动故障转移和负载均衡')}
                        </li>
                        <li>
                          <span className='home-check'>✓</span>
                          {t('完整的调用日志和用量统计')}
                        </li>
                      </ul>
                      <div className='home-base-box'>
                        <div className='mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
                          {t('API地址')}
                        </div>
                        <Input
                          readonly
                          value={serverAddress}
                          size={isMobile ? 'default' : 'large'}
                          suffix={
                            <div className='flex items-center gap-2'>
                              <ScrollList
                                bodyHeight={32}
                                style={{ border: 'unset', boxShadow: 'unset' }}
                              >
                                <ScrollItem
                                  mode='wheel'
                                  cycled={true}
                                  list={endpointItems}
                                  selectedIndex={endpointIndex}
                                  onSelect={({ index }) => setEndpointIndex(index)}
                                />
                              </ScrollList>
                              <Button
                                type='primary'
                                onClick={handleCopyBaseURL}
                                icon={<IconCopy />}
                                className='!rounded-full'
                              />
                            </div>
                          }
                        />
                      </div>
                    </div>
                    <div className='home-reveal'>
                      <div className='home-code-block'>
                        <pre className='m-0 whitespace-pre-wrap break-words'>
{codeExample}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='home-stats'>
              <div className='home-container'>
                <div className='home-stats-grid'>
                  {stats.map((item) => (
                    <div key={item.label} className='home-reveal'>
                      <div className='home-stat-number'>{item.value}</div>
                      <div className='home-stat-label'>{t(item.label)}</div>
                      <div className='home-stat-sub'>{t(item.sub)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className='home-section'>
              <div className='home-container'>
                <div className='home-section-header home-reveal'>
                  <div className='home-section-tag'>{t('// Why 接口通AI')}</div>
                  <h2 className='home-section-title'>{t('为什么选择接口通AI')}</h2>
                  <p className='home-section-desc'>
                    {t('不是二道贩子，不是小代理，接口通是大模型API的源头供应商')}
                  </p>
                </div>
                <div className='home-why-grid'>
                  {whyCards.map((item) => (
                    <div key={item.title} className='home-why-card home-reveal'>
                      <div className={`home-why-icon ${item.iconClass}`}>
                        {item.icon}
                      </div>
                      <h3>{t(item.title)}</h3>
                      <p>{t(item.desc)}</p>
                      <span className='home-highlight'>{t(item.highlight)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className='home-section models'>
              <div className='home-container'>
                <div className='home-section-header home-reveal'>
                  <div className='home-section-tag'>{t('// Supported Models')}</div>
                  <h2 className='home-section-title'>{t('接口通AI 支持的大模型')}</h2>
                  <p className='home-section-desc'>
                    {t('一个接口，通达全球主流AI大模型')}
                  </p>
                </div>
                <div className='home-marquee-wrap home-reveal'>
                  <div className='home-marquee'>
                    {[...models, ...models].map((item, index) => (
                      <div
                        key={`${item.name}-${index}`}
                        className='home-model-chip'
                      >
                        <span className={`home-dot ${item.dot}`} />
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className='home-model-features'>
                  {modelFeatures.map((item) => (
                    <div key={item.title} className='home-model-feature home-reveal'>
                      <div className='text-3xl'>{item.icon}</div>
                      <h4>{t(item.title)}</h4>
                      <p>{t(item.desc)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className='home-section'>
              <div className='home-container'>
                <div className='home-section-header home-reveal'>
                  <div className='home-section-tag'>{t('// Use Cases')}</div>
                  <h2 className='home-section-title'>{t('接口通AI 应用场景')}</h2>
                  <p className='home-section-desc'>
                    {t('从AI漫剧到学术论文，从智能养殖到自动化Agent，无所不能')}
                  </p>
                </div>
                <div className='home-usecases-grid'>
                  {useCases.map((item) => (
                    <div key={item.title} className='home-usecase-card home-reveal'>
                      <span className='home-usecase-icon'>{item.icon}</span>
                      <h3>{t(item.title)}</h3>
                      <p>{t(item.desc)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className='home-cta'>
              <div className='home-container'>
                <h2 className='home-reveal'>
                  {t('准备好接入')}
                  <span className='home-gradient-text'>{t('接口通AI')}</span>
                  {t('了吗？')}
                </h2>
                <p className='home-reveal'>
                  {t('免费试用，分钟级接入。专属客服一对一指导。')}
                </p>
                <div className='home-cta-actions home-reveal'>
                  <Link to='/login' className='home-primary-btn'>
                    <Button>{t('立即接入')}</Button>
                  </Link>
                  <Link to='/login' className='home-secondary-btn'>
                    <Button>{t('免费试用')}</Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className='overflow-x-hidden w-full'>
          {homePageContent.startsWith('https://') ? (
            <iframe
              src={homePageContent}
              className='w-full h-screen border-none'
            />
          ) : (
            <div
              className='mt-[60px]'
              dangerouslySetInnerHTML={{ __html: homePageContent }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

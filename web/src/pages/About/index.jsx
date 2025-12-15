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

import React, { useEffect, useState } from 'react';
import { API, showError } from '../../helpers';
import { marked } from 'marked';
import { Empty } from '@douyinfe/semi-ui';
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';
import { useTranslation } from 'react-i18next';

// 中文版关于内容
const AboutContentZh = () => (
  <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif", background: '#ffffff', color: '#333', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>API Router</div>
      <div style={{ fontSize: '18px', color: '#666' }}>连接智能，路由未来</div>
    </div>

    <div style={{ marginBottom: '40px', padding: '30px', border: '1px solid #e5e5e5', borderRadius: '8px', background: '#fafafa' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#000' }}>关于我们</h2>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>API Router 是一个专业的 AI 大模型调用服务平台，致力于为开发者提供稳定、高效、易用的 API 接口服务。</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>我们整合了多家主流 AI 大模型，通过统一的接口标准，让您轻松接入各类智能应用场景。</p>
    </div>

    <div style={{ marginBottom: '40px', padding: '30px', border: '1px solid #e5e5e5', borderRadius: '8px', background: '#fafafa' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#000' }}>核心优势</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>🚀 高速稳定</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>多节点部署，智能路由，确保服务高可用</p>
        </div>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>🔌 统一接口</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>标准化 API 设计，一次接入，多模型调用</p>
        </div>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>💰 灵活计费</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>按需付费，透明计价，无隐藏费用</p>
        </div>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>🛡️ 安全可靠</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>企业级安全保障，数据加密传输</p>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '40px', padding: '30px', border: '1px solid #e5e5e5', borderRadius: '8px', background: '#fafafa' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#000' }}>服务内容</h2>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• 支持主流 AI 大模型（GPT、Claude、文心一言等）</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• 提供文本生成、对话、翻译、总结等多种能力</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• 完善的文档和技术支持</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• 灵活的调用方式和定制化服务</p>
    </div>

    <div style={{ textAlign: 'center', marginTop: '50px', padding: '30px', background: '#f5f5f5', borderRadius: '8px' }}>
      <p style={{ fontSize: '16px', color: '#555' }}>如有任何疑问或合作需求，欢迎联系我们</p>
      <p style={{ marginTop: '15px' }}>
        <a href="mailto:goverperson@gmail.com" style={{ color: '#000', textDecoration: 'none', fontWeight: '500', borderBottom: '2px solid #000' }}>goverperson@gmail.com</a>
      </p>
    </div>
  </div>
);

// 英文版关于内容
const AboutContentEn = () => (
  <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif", background: '#ffffff', color: '#333', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>API Router</div>
      <div style={{ fontSize: '18px', color: '#666' }}>Connecting Intelligence, Routing the Future</div>
    </div>

    <div style={{ marginBottom: '40px', padding: '30px', border: '1px solid #e5e5e5', borderRadius: '8px', background: '#fafafa' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#000' }}>About Us</h2>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>API Router is a professional AI large model calling service platform, dedicated to providing developers with stable, efficient, and easy-to-use API interface services.</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>We integrate multiple mainstream AI large models through unified interface standards, allowing you to easily access various intelligent application scenarios.</p>
    </div>

    <div style={{ marginBottom: '40px', padding: '30px', border: '1px solid #e5e5e5', borderRadius: '8px', background: '#fafafa' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#000' }}>Core Advantages</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>🚀 High Speed & Stability</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Multi-node deployment, intelligent routing, ensuring high service availability</p>
        </div>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>🔌 Unified Interface</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Standardized API design, one-time integration, multiple model calls</p>
        </div>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>💰 Flexible Billing</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Pay-as-you-go, transparent pricing, no hidden fees</p>
        </div>
        <div style={{ padding: '20px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#000' }}>🛡️ Secure & Reliable</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Enterprise-level security, encrypted data transmission</p>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '40px', padding: '30px', border: '1px solid #e5e5e5', borderRadius: '8px', background: '#fafafa' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#000' }}>Services</h2>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• Support for mainstream AI large models (GPT, Claude, ERNIE Bot, etc.)</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• Provide text generation, dialogue, translation, summarization and other capabilities</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• Comprehensive documentation and technical support</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>• Flexible calling methods and customized services</p>
    </div>

    <div style={{ textAlign: 'center', marginTop: '50px', padding: '30px', background: '#f5f5f5', borderRadius: '8px' }}>
      <p style={{ fontSize: '16px', color: '#555' }}>For any questions or cooperation needs, please contact us</p>
      <p style={{ marginTop: '15px' }}>
        <a href="mailto:goverperson@gmail.com" style={{ color: '#000', textDecoration: 'none', fontWeight: '500', borderBottom: '2px solid #000' }}>goverperson@gmail.com</a>
      </p>
    </div>
  </div>
);

const About = () => {
  const { t, i18n } = useTranslation();
  const [about, setAbout] = useState('');
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [useBackendContent, setUseBackendContent] = useState(false);
  const currentYear = new Date().getFullYear();

  const displayAbout = async () => {
    setAbout(localStorage.getItem('about') || '');
    try {
      const res = await API.get('/api/about');
      const { success, message, data } = res.data;
      if (success && data && data.trim() !== '') {
        let aboutContent = data;
        if (!data.startsWith('https://')) {
          aboutContent = marked.parse(data);
        }
        setAbout(aboutContent);
        setUseBackendContent(true);
        localStorage.setItem('about', aboutContent);
      } else {
        setUseBackendContent(false);
      }
    } catch (error) {
      setUseBackendContent(false);
    }
    setAboutLoaded(true);
  };

  useEffect(() => {
    displayAbout().then();
  }, []);

  const emptyStyle = {
    padding: '24px',
  };

  const customDescription = (
    <div style={{ textAlign: 'center' }}>
      <p>{t('可在设置页面设置关于内容，支持 HTML & Markdown')}</p>
      {t('New API项目仓库地址：')}
      <a
        href='https://github.com/QuantumNous/new-api'
        target='_blank'
        rel='noopener noreferrer'
        className='!text-semi-color-primary'
      >
        https://github.com/QuantumNous/new-api
      </a>
      <p>
        <a
          href='https://github.com/QuantumNous/new-api'
          target='_blank'
          rel='noopener noreferrer'
          className='!text-semi-color-primary'
        >
          NewAPI
        </a>{' '}
        {t('© {{currentYear}}', { currentYear })}{' '}
        <a
          href='https://github.com/QuantumNous'
          target='_blank'
          rel='noopener noreferrer'
          className='!text-semi-color-primary'
        >
          QuantumNous
        </a>{' '}
        {t('| 基于')}{' '}
        <a
          href='https://github.com/songquanpeng/one-api/releases/tag/v0.5.4'
          target='_blank'
          rel='noopener noreferrer'
          className='!text-semi-color-primary'
        >
          One API v0.5.4
        </a>{' '}
        © 2023{' '}
        <a
          href='https://github.com/songquanpeng'
          target='_blank'
          rel='noopener noreferrer'
          className='!text-semi-color-primary'
        >
          JustSong
        </a>
      </p>
      <p>
        {t('本项目根据')}
        <a
          href='https://github.com/songquanpeng/one-api/blob/v0.5.4/LICENSE'
          target='_blank'
          rel='noopener noreferrer'
          className='!text-semi-color-primary'
        >
          {t('MIT许可证')}
        </a>
        {t('授权，需在遵守')}
        <a
          href='https://www.gnu.org/licenses/agpl-3.0.html'
          target='_blank'
          rel='noopener noreferrer'
          className='!text-semi-color-primary'
        >
          {t('AGPL v3.0协议')}
        </a>
        {t('的前提下使用。')}
      </p>
    </div>
  );

  // 判断当前语言，中文显示中文版，其他语言显示英文版
  const isChinese = i18n.language?.startsWith('zh');

  return (
    <div className='mt-[60px] px-2'>
      {aboutLoaded && !useBackendContent ? (
        <div className='flex justify-center'>
          {isChinese ? <AboutContentZh /> : <AboutContentEn />}
        </div>
      ) : useBackendContent ? (
        <>
          {about.startsWith('https://') ? (
            <iframe
              src={about}
              style={{ width: '100%', height: '100vh', border: 'none' }}
            />
          ) : (
            <div
              style={{ fontSize: 'larger' }}
              dangerouslySetInnerHTML={{ __html: about }}
            ></div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default About;

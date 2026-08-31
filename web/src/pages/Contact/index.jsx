/*
Copyright (C) 2025 QuantumNous
*/

import React from 'react';
import { useTranslation } from 'react-i18next';

const CUSTOMER_WECHAT_QR = '/customer-wechat-qr.png';
const CUSTOMER_WECHAT_ID = 'wxid_bx86mr5cg03y22';

const WeChatSupportCard = ({ description, title }) => (
  <div className="mt-4 rounded-xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] p-8 text-center">
    <div className="mb-4">
      <svg className="mx-auto h-12 w-12 text-semi-color-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </div>
    <h2 className="text-xl font-medium mb-4">{title}</h2>
    <p className="text-sm !text-semi-color-text-2 mb-6">
      {description}
    </p>
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        src={CUSTOMER_WECHAT_QR}
        alt={title}
        className="w-52 max-w-full rounded-xl border border-[rgba(0,0,0,0.06)] bg-white p-2 shadow-sm dark:border-[rgba(255,255,255,0.08)]"
      />
      <span className="inline-flex items-center px-6 py-3 font-medium rounded-lg bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.06)]">
        <svg className="w-5 h-5 mr-2 text-semi-color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {CUSTOMER_WECHAT_ID}
      </span>
    </div>
  </div>
);

// 中文版联系我们
const ContactZh = () => (
  <>
    <h1 className="text-2xl font-semibold mb-3">联系我们</h1>
    <p className="text-sm !text-semi-color-text-2 mb-6">
      如有问题、合作或反馈，欢迎通过以下方式与我们联系。
    </p>

    <div className="rounded-xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] p-8 text-center">
      <div className="mb-4">
        <svg className="mx-auto h-12 w-12 text-semi-color-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-xl font-medium mb-4">邮箱联系</h2>
      <p className="text-sm !text-semi-color-text-2 mb-6">
        请通过以下邮箱地址与我们联系。
      </p>
      <div className="flex items-center justify-center">
        <a
          href="mailto:apirouterai@gmail.com"
          className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          apirouterai@gmail.com
        </a>
      </div>
    </div>

    <WeChatSupportCard
      title="微信客服"
      description="您也可以通过微信联系我们的客服。"
    />
  </>
);

// 英文版联系我们
const ContactEn = () => (
  <>
    <h1 className="text-2xl font-semibold mb-3">Contact Us</h1>
    <p className="text-sm !text-semi-color-text-2 mb-6">
      If you have any questions, collaboration opportunities, or feedback, please feel free to contact us through the following methods.
    </p>

    <div className="rounded-xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] p-8 text-center">
      <div className="mb-4">
        <svg className="mx-auto h-12 w-12 text-semi-color-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-xl font-medium mb-4">Email Contact</h2>
      <p className="text-sm !text-semi-color-text-2 mb-6">
        Please contact us via the following email address.
      </p>
      <div className="flex items-center justify-center">
        <a
          href="mailto:apirouterai@gmail.com"
          className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          apirouterai@gmail.com
        </a>
      </div>
    </div>

    <WeChatSupportCard
      title="WeChat Support"
      description="You can also reach our support team via WeChat."
    />
  </>
);

export default function Contact() {
  const { i18n } = useTranslation();

  // 判断当前语言，中文显示中文版，其他语言显示英文版
  const isChinese = i18n.language?.startsWith('zh');

  return (
    <div className="mt-[60px] px-4 py-8 flex justify-center">
      <div className="w-full max-w-[900px]">
        {isChinese ? <ContactZh /> : <ContactEn />}
      </div>
    </div>
  );
}

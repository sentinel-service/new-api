/*
Copyright (C) 2025 QuantumNous
*/

import React from 'react';
import { useTranslation } from 'react-i18next';

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
          href="mailto:goverperson@gmail.com"
          className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          goverperson@gmail.com
        </a>
      </div>
    </div>
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
          href="mailto:goverperson@gmail.com"
          className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          goverperson@gmail.com
        </a>
      </div>
    </div>
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

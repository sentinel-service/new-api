/*
Copyright (C) 2025 QuantumNous
*/

import React from 'react';

export default function Contact() {
  return (
    <div className="mt-[60px] px-4 py-8 flex justify-center">
      <div className="w-full max-w-[900px]">
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
              className="inline-flex items-center px-6 py-3 bg-semi-color-primary text-white font-medium rounded-lg hover:bg-semi-color-primary-hover transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              goverperson@gmail.com
            </a>
          </div>
          <p className="text-xs !text-semi-color-text-3 mt-4">
            点击上方按钮可直接打开邮件客户端
          </p>
        </div>
      </div>
    </div>
  );
}



/*
Copyright (C) 2025 QuantumNous
*/

import React from 'react';

export default function PrivacyAgreement() {
  return (
    <div className="mt-[60px] px-4 py-8 flex justify-center">
      <div className="w-full max-w-[900px]">
        <h1 className="text-2xl font-semibold mb-3">隐私协议</h1>
        <p className="text-sm !text-semi-color-text-2 mb-6">
          本页面为自定义隐私协议，以避免与系统内置「隐私政策」产生冲突。你可按需替换正文内容。
        </p>

        <div className="rounded-xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] p-5">
          <h2 className="text-lg font-medium mb-2">信息收集与使用</h2>
          <p className="text-sm leading-7">
            我们仅为提供、维护与改进服务所必需的目的收集最小化数据，除法律法规或经您授权，不向第三方出售或出租您的个人信息。
          </p>
          <h2 className="text-lg font-medium mt-4 mb-2">数据安全</h2>
          <p className="text-sm leading-7">
            数据存储在受控环境中，采用访问控制与必要的加密手段进行保护。请妥善保管账号凭据。
          </p>
          <h2 className="text-lg font-medium mt-4 mb-2">您的权利</h2>
          <p className="text-sm leading-7">
            您可随时联系我们以访问、更正或删除您的个人数据。
          </p>
          <p className="text-sm leading-7 mt-4">
            如需沟通，请访问 <a href="/contact-us" className="!text-semi-color-primary">联系我们</a> 页面。
          </p>
        </div>
      </div>
    </div>
  );
}



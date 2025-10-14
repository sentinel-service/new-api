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

        <div className="rounded-xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] p-5 mb-6">
          <h2 className="text-lg font-medium mb-2">联系方式</h2>
          <ul className="list-disc pl-5 text-sm leading-7">
            <li>
              邮箱：<a href="mailto:support@example.com" className="!text-semi-color-primary">support@example.com</a>
            </li>
            <li>
              工单：登录系统后进入 控制台 → 设置 → 反馈/其他 提交。
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] p-5">
          <h2 className="text-lg font-medium mb-2">快速留言（示例）</h2>
          <p className="text-sm !text-semi-color-text-2 mb-3">此表单仅作展示，不会真正发送。</p>
          <form className="grid grid-cols-1 gap-3" onSubmit={(e)=>e.preventDefault()}>
            <input className="rounded-lg px-3 py-2 border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] bg-transparent" placeholder="称呼" />
            <input className="rounded-lg px-3 py-2 border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] bg-transparent" type="email" placeholder="邮箱" />
            <textarea className="rounded-lg px-3 py-2 h-28 border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] bg-transparent" placeholder="留言"></textarea>
            <button className="self-start rounded-lg px-4 py-2 bg-blue-600 text-white text-sm font-semibold">发送（演示）</button>
          </form>
        </div>
      </div>
    </div>
  );
}



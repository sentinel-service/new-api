/*
Copyright (C) 2025 QuantumNous
*/

import React from 'react';

export default function TermsOfService() {
  return (
    <div className="mt-[60px] px-4 py-8 flex justify-center">
      <div className="w-full max-w-[900px]">
        <h1 className="text-2xl font-semibold mb-3">服务条款</h1>

        <div className="prose prose-sm max-w-none">
          <p className="text-sm leading-7 mb-4">
            API Router（以下简称：本产品）运营人工智能服务平台，用户可通过网站访问第三方应用程序接口（API），使用平台所列的各类生成式人工智能模型（以下简称：AI 模型）。本产品有权随时在服务中添加或移除 AI 模型，且无需提前通知用户。
          </p>

          <p className="text-sm leading-7 mb-6">
            请您仔细阅读以下条款。一旦您使用我们的服务即表示您已阅读、理解并同意受本服务条款及《隐私政策》（合称"条款"）的约束。若您不符合使用资格或不同意本条款，请勿使用本服务。
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-medium mb-3">使用资格</h2>
              <p className="text-sm leading-7 mb-3">
                您需年满 13 周岁方可使用本服务。您同意并声明保证：
              </p>
              <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
                <li>您已年满 13 周岁；</li>
                <li>您此前未被暂停或终止使用本服务；</li>
                <li>您的注册及使用行为符合所有适用法律法规。</li>
              </ul>
              <p className="text-sm leading-7 mt-3">
                若您未满 18 周岁，须在父母或监护人的许可下使用本服务。若您代表实体、组织或公司使用本服务，您声明保证已获得授权，可代表该组织接受本条款的约束，并同意以该组织名义受本条款约束。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">账号与注册</h2>
              <p className="text-sm leading-7 mb-3">
                要使用本服务的大部分功能，您需注册账号。注册时，您可能需向我们或授权的认证平台提供个人信息（如电子邮箱或其他联系方式）。您承诺所提供的信息真实、准确，并将持续维护信息的有效性与更新。
              </p>
              <p className="text-sm leading-7">
                注册时您需设置密码，您对账号及密码的保密性负全部责任，且需对账号下发生的所有活动承担责任。若您认为账号存在安全风险，须立即通过本条款提供的联系方式通知我们。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">退款政策</h2>
              <div className="text-sm leading-7 space-y-3">
                <p>根据我们的服务条款，一旦您使用过我们的服务，将无法获得退款。</p>
                <p>如果你未使用该服务，退款将遵循以下政策：</p>
                <div className="ml-4">
                  <p className="font-medium">欧盟或土耳其客户</p>
                  <p>如果您居住在欧盟或土耳其，您有资格在初始购买后14天内获得退款。请在退款申请中注明您是根据欧盟或土耳其法规申请退款。如果您的账户有任何异常，客服在处理退款申请时可能需要您提供相关证明。</p>
                  <p className="font-medium mt-3">所有其他客户</p>
                  <p>您可以在初始购买收费后24小时内申请退款。请在申请中说明您的退款原因。在此期限后提出的申请将不予退款。</p>
                </div>
                <p>尽管我们严格遵守政策，但如果您的账户存在异常情况，我们可能无法满足您的退款请求。我们努力使我们的退款政策尽可能公平。</p>
                <p>如果你符合退款条件，我们将处理退款并在 7-10 个工作日内回复你。但请注意，如果你之前曾因我们的服务获得过退款，我们保留拒绝后续退款请求的权利。这项政策旨在防止滥用我们的退款系统，并确保我们服务的公平使用。</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">数据隐私和安全</h2>
              <p className="text-sm leading-7">
                本产品致力于保护用户的隐私和安全。个人信息将根据我们的《隐私政策》进行处理。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">责任限制</h2>
              <div className="text-sm leading-7 space-y-3">
                <p><strong>平台服务稳定性：</strong>本产品对因使用或无法使用服务而引起的任何间接、偶然或后果性损害不承担责任。</p>
                <p><strong>第三方API 稳定性：</strong>我们的服务依赖于第三方 API，这些 API 可能会偶尔出现不稳定或停机。我们对由这些第三方服务引起的任何中断不承担责任。</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">内容限制</h2>
              <p className="text-sm leading-7 mb-3">使用我们的网站服务，用户必须遵守以下内容限制：</p>
              <div className="text-sm leading-7 space-y-3">
                <div>
                  <p className="font-medium">1. 用户责任：</p>
                  <p>公司不对服务用户生成的内容负责。您明确理解并同意，您仅对您账户下的内容以及所有活动负责，无论这些活动是由您本人还是任何使用您账户的第三方进行的。</p>
                </div>
                <div>
                  <p className="font-medium">2. 禁止内容：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>违反法律或促进非法活动的内容。</li>
                    <li>自动文章改写和机器人式内容生成。</li>
                    <li>诽谤性、歧视性或恶意内容，包括涉及宗教、种族、性取向、性别、国籍/民族起源或其他特定群体的言论或评论。</li>
                    <li>属于受限领域的內容，如药物使用、成人服务等。</li>
                    <li>垃圾邮件、机器或随机生成的內容、未经授权或未经请求的广告、连锁信、任何其他形式的未经授权的请求，或任何形式的彩票或赌博。</li>
                    <li>包含或安装任何病毒、蠕虫、恶意软件、特洛伊木马或其他旨在破坏、损害或限制任何软件、硬件或电信设备功能，或损害或获取第三方数据或其他信息未经授权访问的內容。</li>
                    <li>侵犯任何一方专有权利的内容，包括专利、商标、商业秘密、版权、公开权或其他权利。</li>
                    <li>冒充任何个人或实体的内容，包括公司及其员工或代表。</li>
                    <li>侵犯任何第三方的隐私的内容。</li>
                    <li>虚假信息和功能。</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm leading-7 mt-3">
                如果我们发现任何违反上述限制的内容，我们有权立即删除或屏蔽该内容，并采取适当措施，包括但不限于暂停或终止用户的服务。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">使用条款和法律合规</h2>
              <div className="text-sm leading-7 space-y-3">
                <div>
                  <p className="font-medium">使用政策：</p>
                  <p>用户在使用我们提供的模型时，必须遵守所有适用法律和法规，包括但不限于知识产权法、数据保护法和网络安全法。用户承诺不将模型用于任何非法、不道德或侵犯权利的目的。</p>
                </div>
                <div>
                  <p className="font-medium">执法与处罚：</p>
                  <p>如果我们发现用户从事以下行为，我们保留采取适当措施的权利，包括但不限于部分功能禁用、访问限制或永久账户停用。对于违规行为，将不予退款。</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>使用模型进行非法活动或侵犯他人权利，违反法律法规或本协议规定。</li>
                    <li>未经授权对模型进行复制、分发、修改或逆向工程。</li>
                    <li>使用该模型进行恶意攻击、危害系统安全或干扰其他用户正常使用。</li>
                    <li>滥用模型功能，包括但不限于过度请求、自动化批量操作等，导致系统资源过度消耗或影响其他用户正常使用。</li>
                    <li>任何我们认为不符合规定、不适当或损害我们的服务、系统或其他用户利益的服务使用方式。</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">通知与申诉：</p>
                  <p>在采取任何措施前，我们将尽力通知用户并告知其违规行为。用户在收到通知后有权在合理时间内申诉，并提供相关证据证明其行为的合法性。我们将审查用户的申诉，并根据实际情况决定是否解除或调整相关措施。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">条款的修订</h2>
              <p className="text-sm leading-7">
                我们保留随时修改这些条款和条件的权利。服务变更后继续使用即表示接受新条款。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">联系方式</h2>
              <p className="text-sm leading-7">
                对于任何查询或支持，请联系 <a href="mailto:goverperson@gmail.com" className="!text-semi-color-primary">goverperson@gmail.com</a>
              </p>
              <p className="text-sm leading-7 mt-3">
                一旦您使用本产品，即代表您同意以上条款和条件。
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

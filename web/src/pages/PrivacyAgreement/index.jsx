import React from 'react';
import { useTranslation } from 'react-i18next';

// 中文版隐私政策
const PrivacyPolicyZh = () => (
  <>
    <h1 className="text-2xl font-semibold mb-3">隐私政策</h1>

    <div className="prose prose-sm max-w-none">
      <p className="text-sm leading-7 mb-6">
        本隐私政策描述了我们如何收集、使用和保护您在使用 API Router 服务时提供的个人信息。我们重视您的隐私，并致力于保护您的个人数据。
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-medium mb-3">信息收集</h2>
          <p className="text-sm leading-7 mb-3">
            我们可能收集以下类型的信息：
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li><strong>账户信息：</strong>当您注册账户时，我们会收集您的电子邮箱地址、用户名和密码等基本信息。</li>
            <li><strong>使用数据：</strong>我们会收集您使用服务的相关信息，包括 API 调用记录、使用频率和模型选择等。</li>
            <li><strong>技术信息：</strong>我们可能收集您的 IP 地址、浏览器类型、设备信息和操作系统等技术数据。</li>
            <li><strong>支付信息：</strong>如果您购买付费服务，我们会通过第三方支付处理器收集必要的支付信息。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">信息使用</h2>
          <p className="text-sm leading-7 mb-3">
            我们使用收集的信息用于以下目的：
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li>提供、维护和改进我们的服务</li>
            <li>处理您的交易和管理您的账户</li>
            <li>向您发送服务相关的通知和更新</li>
            <li>响应您的询问和提供客户支持</li>
            <li>监控和分析使用趋势以改善用户体验</li>
            <li>检测、预防和解决技术问题及安全威胁</li>
            <li>遵守法律义务和执行我们的服务条款</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">信息共享</h2>
          <p className="text-sm leading-7 mb-3">
            我们不会出售、交易或出租您的个人信息给第三方。我们可能在以下情况下共享您的信息：
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li><strong>服务提供商：</strong>我们可能与帮助我们运营服务的第三方服务提供商共享信息，如支付处理器、云存储提供商等。</li>
            <li><strong>法律要求：</strong>如果法律要求或为了保护我们的权利、财产或安全，我们可能会披露您的信息。</li>
            <li><strong>业务转让：</strong>如果我们参与合并、收购或资产出售，您的信息可能会作为交易的一部分被转让。</li>
            <li><strong>经您同意：</strong>在获得您明确同意的情况下，我们可能会与其他第三方共享您的信息。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">数据安全</h2>
          <p className="text-sm leading-7">
            我们采取合理的技术和组织措施来保护您的个人信息免受未经授权的访问、使用、披露、更改或破坏。这些措施包括加密、访问控制和安全的数据存储。然而，请注意，没有任何互联网传输或电子存储方法是 100% 安全的。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">数据保留</h2>
          <p className="text-sm leading-7">
            我们会在必要的时间内保留您的个人信息，以实现本隐私政策中描述的目的，除非法律要求或允许更长的保留期。当您的信息不再需要时，我们会安全地删除或匿名化处理。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">您的权利</h2>
          <p className="text-sm leading-7 mb-3">
            根据适用的数据保护法律，您可能拥有以下权利：
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li><strong>访问权：</strong>您有权请求访问我们持有的关于您的个人信息。</li>
            <li><strong>更正权：</strong>您有权要求更正不准确或不完整的个人信息。</li>
            <li><strong>删除权：</strong>在某些情况下，您有权要求删除您的个人信息。</li>
            <li><strong>限制处理权：</strong>您有权要求限制对您个人信息的处理。</li>
            <li><strong>数据可携权：</strong>您有权以结构化、常用和机器可读的格式接收您的个人信息。</li>
            <li><strong>反对权：</strong>您有权反对我们处理您的个人信息。</li>
          </ul>
          <p className="text-sm leading-7 mt-3">
            要行使这些权利，请通过本政策末尾提供的联系方式与我们联系。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Cookie 和跟踪技术</h2>
          <p className="text-sm leading-7">
            我们使用 Cookie 和类似的跟踪技术来跟踪我们服务上的活动并保存某些信息。Cookie 是包含少量数据的文件，可能包括匿名唯一标识符。您可以指示您的浏览器拒绝所有 Cookie 或指示何时发送 Cookie。但是，如果您不接受 Cookie，您可能无法使用我们服务的某些部分。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">第三方链接</h2>
          <p className="text-sm leading-7">
            我们的服务可能包含指向非我们运营的第三方网站的链接。如果您点击第三方链接，您将被引导至该第三方的网站。我们强烈建议您查看您访问的每个网站的隐私政策。我们无法控制第三方网站或服务的内容、隐私政策或做法，也不承担任何责任。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">儿童隐私</h2>
          <p className="text-sm leading-7">
            我们的服务不面向 13 岁以下的儿童。我们不会有意收集 13 岁以下儿童的个人身份信息。如果您是父母或监护人，并且您知道您的孩子向我们提供了个人信息，请与我们联系。如果我们发现我们在未经父母同意的情况下收集了 13 岁以下儿童的个人信息，我们会采取措施从我们的服务器中删除该信息。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">国际数据传输</h2>
          <p className="text-sm leading-7">
            您的信息可能会被传输到并维护在您所在州、省、国家或其他政府管辖区之外的计算机上，这些地方的数据保护法律可能与您所在管辖区的法律不同。如果您位于中国境外并选择向我们提供信息，请注意我们会将数据（包括个人信息）传输到中国并在那里进行处理。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">隐私政策的变更</h2>
          <p className="text-sm leading-7">
            我们可能会不时更新我们的隐私政策。我们将通过在本页面上发布新的隐私政策来通知您任何变更。我们建议您定期查看本隐私政策以了解任何变更。隐私政策的变更在本页面上发布时生效。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">联系我们</h2>
          <p className="text-sm leading-7">
            如果您对本隐私政策有任何疑问或建议，请通过以下方式与我们联系：
          </p>
          <p className="text-sm leading-7 mt-3">
            电子邮箱：<a href="mailto:goverperson@gmail.com" className="!text-semi-color-primary">goverperson@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  </>
);

// 英文版隐私政策
const PrivacyPolicyEn = () => (
  <>
    <h1 className="text-2xl font-semibold mb-3">Privacy Policy</h1>

    <div className="prose prose-sm max-w-none">
      <p className="text-sm leading-7 mb-6">
        This Privacy Policy describes how we collect, use, and protect your personal information when you use the API Router service. We value your privacy and are committed to protecting your personal data.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-medium mb-3">Information Collection</h2>
          <p className="text-sm leading-7 mb-3">
            We may collect the following types of information:
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li><strong>Account Information:</strong> When you register an account, we collect basic information such as your email address, username, and password.</li>
            <li><strong>Usage Data:</strong> We collect information about your use of the service, including API call records, usage frequency, and model selections.</li>
            <li><strong>Technical Information:</strong> We may collect technical data such as your IP address, browser type, device information, and operating system.</li>
            <li><strong>Payment Information:</strong> If you purchase paid services, we collect necessary payment information through third-party payment processors.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Information Use</h2>
          <p className="text-sm leading-7 mb-3">
            We use the collected information for the following purposes:
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your transactions and manage your account</li>
            <li>Send you service-related notifications and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Monitor and analyze usage trends to improve user experience</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Comply with legal obligations and enforce our Terms of Service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Information Sharing</h2>
          <p className="text-sm leading-7 mb-3">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li><strong>Service Providers:</strong> We may share information with third-party service providers who help us operate our services, such as payment processors and cloud storage providers.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights, property, or safety.</li>
            <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of the transaction.</li>
            <li><strong>With Your Consent:</strong> We may share your information with other third parties with your explicit consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Data Security</h2>
          <p className="text-sm leading-7">
            We take reasonable technical and organizational measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include encryption, access controls, and secure data storage. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Data Retention</h2>
          <p className="text-sm leading-7">
            We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Your Rights</h2>
          <p className="text-sm leading-7 mb-3">
            Depending on applicable data protection laws, you may have the following rights:
          </p>
          <ul className="text-sm leading-7 list-disc pl-6 space-y-1">
            <li><strong>Right to Access:</strong> You have the right to request access to the personal information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate or incomplete personal information.</li>
            <li><strong>Right to Erasure:</strong> In certain circumstances, you have the right to request deletion of your personal information.</li>
            <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing of your personal information.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to receive your personal information in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal information.</li>
          </ul>
          <p className="text-sm leading-7 mt-3">
            To exercise these rights, please contact us using the contact information provided at the end of this policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Cookies and Tracking Technologies</h2>
          <p className="text-sm leading-7">
            We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Third-Party Links</h2>
          <p className="text-sm leading-7">
            Our service may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Children's Privacy</h2>
          <p className="text-sm leading-7">
            Our service is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we discover that we have collected personal information from children under 13 without parental consent, we will take steps to remove that information from our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">International Data Transfers</h2>
          <p className="text-sm leading-7">
            Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside China and choose to provide information to us, please note that we transfer the data, including personal information, to China and process it there.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Changes to This Privacy Policy</h2>
          <p className="text-sm leading-7">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We advise you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Contact Us</h2>
          <p className="text-sm leading-7">
            If you have any questions or suggestions about this Privacy Policy, please contact us:
          </p>
          <p className="text-sm leading-7 mt-3">
            Email: <a href="mailto:goverperson@gmail.com" className="!text-semi-color-primary">goverperson@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  </>
);

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();

  // 判断当前语言，中文显示中文版，其他语言显示英文版
  const isChinese = i18n.language?.startsWith('zh');

  return (
    <div className="mt-[60px] px-4 py-8 flex justify-center">
      <div className="w-full max-w-[900px]">
        {isChinese ? <PrivacyPolicyZh /> : <PrivacyPolicyEn />}
      </div>
    </div>
  );
};

export default PrivacyPolicy;

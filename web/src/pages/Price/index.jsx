import React, { useMemo, useState } from 'react';

export default function Price() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const amounts = useMemo(
    () => [
      { amount: 10, label: '基础版', features: ['即时到账', '可叠加使用'] },
      { amount: 50, label: '进阶版', features: ['即时到账', '可叠加使用'] },
      {
        amount: 200,
        label: '专业版',
        features: ['即时到账', '可叠加使用', '优先技术支持'],
      },
      {
        amount: 500,
        label: '企业版',
        features: ['即时到账', '可叠加使用', '专属技术支持', '定制化服务'],
      },
    ],
    []
  );

  const handlePurchase = () => setShowModal(true);
  const handleCancel = () => setShowModal(false);
  const handlePay = () => {
    setShowModal(false);
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="px-4 py-8 flex justify-center">
      <style>{`
        * { box-sizing: border-box; }
        .price-container { max-width: 1200px; width: 100%; }
        .price-header { text-align: center; margin: 30px 0 40px; }
        .price-header h1 { color: #2c3e50; font-size: 32px; margin-bottom: 10px; }
        .price-header p { color: #7f8c8d; font-size: 16px; }
        .dark .price-header h1 { color: #e5e7eb; }
        .dark .price-header p { color: #cbd5e1; }
        .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
        .card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,.07); cursor: pointer; transition: all .3s ease; border: 3px solid transparent; position: relative; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0,0,0,.1); }
        .card.selected { border-color: rgb(0,100,250); background: #f0f6ff; }
        .badge { position: absolute; top: 15px; right: 15px; background: rgb(0,100,250); color: #fff; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 700; opacity: 0; transition: opacity .3s; }
        .card.selected .badge { opacity: 1; }
        .amount { font-size: 48px; font-weight: 700; color: #2c3e50; margin-bottom: 12px; }
        .label { color: #7f8c8d; font-size: 14px; margin-bottom: 16px; }
        .features { list-style: none; padding: 0; margin: 0; }
        .features li { color: #5a6c7d; font-size: 14px; padding: 8px 0; border-bottom: 1px solid #ecf0f1; }
        .features li:last-child { border-bottom: none; }
        .features li::before { content: '✓'; color: #27ae60; font-weight: 700; margin-right: 8px; }
        .purchase { text-align: center; margin-top: 40px; }
        .terms { color: #7f8c8d; font-size: 14px; margin-bottom: 16px; }
        .terms a { color: rgb(0,100,250); text-decoration: none; }
        .terms a:hover { text-decoration: underline; }
        .purchase-btn { background: linear-gradient(135deg, rgb(0,100,250) 0%, rgb(0,80,200) 100%); color: #fff; border: 0; padding: 14px 48px; font-size: 16px; border-radius: 30px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,100,250,.3); transition: all .3s ease; font-weight: 600; }
        .purchase-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,100,250,.4); }
        .purchase-btn:disabled { background: #bdc3c7; cursor: not-allowed; box-shadow: none; }
        .modal-mask { display: ${showModal ? 'flex' : 'none'}; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,.5); z-index: 1000; align-items: center; justify-content: center; }
        .modal { background: #fff; border-radius: 20px; padding: 32px; max-width: 520px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,.2); animation: slideIn .3s ease; }
        @keyframes slideIn { from { transform: translateY(-50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .modal-header { text-align: center; margin-bottom: 20px; }
        .modal-info { background: #f8f9fa; border-radius: 12px; padding: 16px; margin-bottom: 20px; }
        .modal-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef; }
        .modal-row:last-child { border-bottom: none; }
        .modal-label { color: #7f8c8d; font-size: 14px; }
        .modal-value { color: #2c3e50; font-weight: 600; font-size: 16px; }
        .modal-total { font-size: 20px; color: rgb(0,100,250); }
        .modal-actions { display: flex; gap: 12px; }
        .btn { flex: 1; padding: 12px; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all .3s ease; }
        .btn-primary { background: linear-gradient(135deg, rgb(0,100,250) 0%, rgb(0,80,200) 100%); color: #fff; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,100,250,.3); }
        .btn-secondary { background: #ecf0f1; color: #7f8c8d; }
        .btn-secondary:hover { background: #d5dbdb; }
        .toast { position: fixed; top: 20px; right: 20px; background: #2c3e50; color: #fff; padding: 14px 20px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,.15); z-index: 2000; display: ${showToast ? 'block' : 'none'}; }
      `}</style>

      <div className="price-container">
        <div className="price-header">
          <h1>API Router 充值兑换码</h1>
          <p>选择您需要的额度，一次仅可购买一张</p>
        </div>

        <div className="cards">
          {amounts.map(({ amount, label, features }) => (
            <div
              key={amount}
              className={`card ${selectedAmount === amount ? 'selected' : ''}`}
              onClick={() => setSelectedAmount(amount)}
            >
              <div className="badge">已选择</div>
              <div className="amount">{`$${amount}`}</div>
              <div className="label">{label}</div>
              <ul className="features">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="purchase">
          <p className="terms">
            购买即同意我们的{' '}
            <a href="https://apirouter.ai/terms-of-service" target="_blank" rel="noreferrer">
              《服务条款》
            </a>
          </p>
          <button
            className="purchase-btn"
            disabled={!selectedAmount}
            onClick={handlePurchase}
          >
            确认购买
          </button>
        </div>
      </div>

      <div className="modal-mask" onClick={handleCancel}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>确认支付信息</h2>
          </div>
          <div className="modal-info">
            <div className="modal-row">
              <span className="modal-label">商品</span>
              <span className="modal-value">API Router 兑换码</span>
            </div>
            <div className="modal-row">
              <span className="modal-label">额度</span>
              <span className="modal-value">{selectedAmount ? `$${selectedAmount}` : '$0'}</span>
            </div>
            <div className="modal-row">
              <span className="modal-label">数量</span>
              <span className="modal-value">1 张</span>
            </div>
            <div className="modal-row">
              <span className="modal-label">支付金额</span>
              <span className="modal-value modal-total">{selectedAmount ? `$${selectedAmount}` : '$0'}</span>
            </div>
          </div>
          <div className="modal-actions">
            <button className="btn btn-secondary" onClick={handleCancel}>取消</button>
            <button className="btn btn-primary" onClick={handlePay}>去支付</button>
          </div>
        </div>
      </div>

      <div className="toast">正在开发中...</div>
    </div>
  );
}



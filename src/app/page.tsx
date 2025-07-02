export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>次世代Webアプリケーション開発</h1>
          <p>日本企業のDX推進を加速するNEXUSプラットフォーム</p>
          <a href="#contact" className="btn">無料相談を開始</a>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <h2>NEXUSの特徴</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🚀 高速開発</h3>
              <p>最新技術により開発期間を70%短縮。スピード感のあるDX推進を実現します。</p>
            </div>
            <div className="feature-card">
              <h3>💎 企業級品質</h3>
              <p>Fortune 500企業にも採用される高品質なシステムを提供。信頼性と拡張性を両立。</p>
            </div>
            <div className="feature-card">
              <h3>📈 実績豊富</h3>
              <p>300社以上の導入実績。製造業、金融、小売など幅広い業界で成功事例があります。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact" id="contact" style={{padding: '80px 0', background: '#f7f7f7'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '36px', marginBottom: '20px'}}>今すぐ無料相談</h2>
          <p style={{fontSize: '18px', marginBottom: '30px', color: '#666'}}>
            DX推進のお悩みやご要望をお聞かせください。<br />
            専門コンサルタントが最適なソリューションをご提案します。
          </p>
          <div style={{fontSize: '24px', fontWeight: 'bold', color: '#667eea'}}>
            📞 03-1234-5678
          </div>
          <p style={{marginTop: '10px', color: '#666'}}>
            平日 9:00-18:00 / メール: info@nexus-platform.jp
          </p>
        </div>
      </div>
    </>
  );
}
import React, { useEffect } from 'react';

const products = [
  {
    name: 'Impact Drill',
    category: 'Cordless Power',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1581147036324-c17ac5e9c3c6?auto=format&fit=crop&w=900&q=80',
    description: 'High-torque drilling performance for heavy-duty projects and precision fastening.',
  },
  {
    name: 'Angle Grinder',
    category: 'Cutting & Grinding',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    description: 'Fast, controlled cutting and polishing for metal, stone, and renovation work.',
  },
  {
    name: 'Air Compressor',
    category: 'Workshop Essential',
    price: '$329',
    image: 'https://images.unsplash.com/photo-1600663433503-5e8d5d3a2f7f?auto=format&fit=crop&w=900&q=80',
    description: 'Reliable pressure output for painting, nailing, and workshop efficiency.',
  },
  {
    name: 'Circular Saw',
    category: 'Cutting Power',
    price: '$289',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    description: 'Clean, fast cuts for wood and framing tasks with excellent control and balance.',
  },
];

const infoCards = [
  {
    title: 'Heavy Duty Tools',
    text: 'Built for concrete, metal, and long-working industrial jobs.',
  },
  {
    title: 'Smart Performance',
    text: 'Advanced motors and ergonomic designs reduce fatigue and boost output.',
  },
  {
    title: 'Trusted Quality',
    text: 'Precision engineering with durable materials for dependable performance.',
  },
];

function Homepage({ onLogin }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="power-tools-home" style={{ fontFamily: 'Arial, sans-serif', color: '#e5eefb', background: '#07131f' }}>
      <style>{`
        .power-tools-home {
          background:
            radial-gradient(circle at top, rgba(54, 93, 201, 0.35), transparent 20%),
            linear-gradient(180deg, #07131f 0%, #0b1f2e 100%);
          overflow-x: hidden;
        }

        .power-tools-home * { box-sizing: border-box; }

        .power-tools-home .nav-btn,
        .power-tools-home .primary-btn,
        .power-tools-home .secondary-btn,
        .power-tools-home .login-btn,
        .power-tools-home .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .power-tools-home .nav-btn:hover,
        .power-tools-home .primary-btn:hover,
        .power-tools-home .secondary-btn:hover,
        .power-tools-home .login-btn:hover,
        .power-tools-home .product-card:hover {
          transform: translateY(-4px);
        }

        .power-tools-home .hero-visual {
          transform: perspective(1200px) rotateY(-18deg) rotateX(8deg);
          transition: transform 0.6s ease;
        }

        .power-tools-home .hero-visual:hover {
          transform: perspective(1200px) rotateY(-10deg) rotateX(4deg) translateY(-6px);
        }

        .power-tools-home .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .power-tools-home .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 900px) {
          .power-tools-home .hero-wrap { grid-template-columns: 1fr !important; }
          .power-tools-home .products-grid, .power-tools-home .info-grid { grid-template-columns: 1fr !important; }
          .power-tools-home .header-wrap { flex-direction: column !important; }
          .power-tools-home .nav { flex-wrap: wrap; justify-content: center; }
        }

        @media (max-width: 640px) {
          .power-tools-home header {
            padding: 18px 20px !important;
          }

          .power-tools-home .nav {
            gap: 12px 18px !important;
            font-size: 13px !important;
          }

          .power-tools-home .hero-wrap {
            padding: 60px 18px 40px !important;
          }

          .power-tools-home h1 {
            font-size: 42px !important;
          }

          .power-tools-home .primary-btn,
          .power-tools-home .secondary-btn,
          .power-tools-home .login-btn {
            width: 100% !important;
          }

          .power-tools-home .products-grid,
          .power-tools-home .info-grid,
          .power-tools-home .hero-wrap {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <header style={{ background: 'rgba(7, 19, 31, 0.78)', borderBottom: '1px solid rgba(120, 146, 176, 0.25)', padding: '18px 60px', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div className="header-wrap" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '30px', fontWeight: '700', color: '#f8fbff', letterSpacing: '1px' }}>PowerPro</div>

          <nav className="nav" style={{ display: 'flex', gap: '28px', color: '#dfeaf8', fontSize: '15px' }}>
            <button type="button" className="nav-btn" style={{ background: 'transparent', border: 'none', color: '#dfeaf8', cursor: 'pointer' }}>Home</button>
            <button type="button" className="nav-btn" style={{ background: 'transparent', border: 'none', color: '#dfeaf8', cursor: 'pointer' }}>Products</button>
            <button type="button" className="nav-btn" style={{ background: 'transparent', border: 'none', color: '#dfeaf8', cursor: 'pointer' }}>Solutions</button>
            <button type="button" className="nav-btn" style={{ background: 'transparent', border: 'none', color: '#dfeaf8', cursor: 'pointer' }}>Support</button>
          </nav>

          <button type="button" className="login-btn" onClick={onLogin} style={{ background: '#ffb703', color: '#101923', border: 'none', borderRadius: '999px', padding: '12px 22px', fontWeight: '700', cursor: 'pointer' }}>Login</button>
        </div>
      </header>

      <main>
        <section className="hero-wrap reveal" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '42px', padding: '80px 20px 60px', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, color: '#7ec8ff', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '12px', fontWeight: '700' }}>Built for serious work</p>
            <h1 style={{ margin: '18px 0 20px', fontSize: '62px', lineHeight: '1.05', color: '#f8fbff' }}>Power tools that keep you moving.</h1>
            <p style={{ margin: 0, maxWidth: '560px', color: '#bfd3eb', fontSize: '18px', lineHeight: '1.8' }}>
              Precision-built equipment for contractors, tradespeople, and workshops demanding speed, durability, and high performance every day.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: '30px', flexWrap: 'wrap' }}>
              <button type="button" className="primary-btn" style={{ background: '#ffb703', color: '#0a1620', border: 'none', padding: '16px 26px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>Shop tools</button>
              <button type="button" className="secondary-btn" style={{ background: 'transparent', color: '#f8fbff', border: '1px solid rgba(255,255,255,0.25)', padding: '16px 26px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>Learn more</button>
            </div>

            <div style={{ display: 'flex', gap: '26px', marginTop: '40px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#f8fbff' }}>12k+</div>
                <div style={{ color: '#9dbad5', fontSize: '14px' }}>Tools delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#f8fbff' }}>4.9/5</div>
                <div style={{ color: '#9dbad5', fontSize: '14px' }}>Customer rating</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#f8fbff' }}>24/7</div>
                <div style={{ color: '#9dbad5', fontSize: '14px' }}>Service support</div>
              </div>
            </div>
          </div>

          <div className="hero-visual" style={{ background: 'linear-gradient(135deg, #17314e 0%, #2f5d87 100%)', minHeight: '520px', borderRadius: '22px', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,0,0,0.3)' }}>
            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80" alt="Power tools" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.1)' }} />
            <div style={{ position: 'absolute', bottom: '22px', left: '22px', right: '22px', background: 'rgba(6, 15, 24, 0.72)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '20px 22px', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#86c4ff' }}>Featured</div>
              <div style={{ marginTop: '8px', fontSize: '28px', fontWeight: '700', color: '#fff' }}>Titan X Series</div>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))', padding: '30px 20px 80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>
              <p style={{ margin: 0, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', color: '#7ec8ff', fontWeight: '700' }}>Top sellers</p>
              <h2 style={{ margin: '12px 0 0', fontSize: '42px', color: '#f8fbff' }}>Professional-grade performance</h2>
            </div>

            <div className="products-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '24px' }}>
              {products.map((product) => (
                <div key={product.name} className="product-card" style={{ background: '#112737', border: '1px solid rgba(150, 190, 230, 0.2)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                  <div style={{ padding: '22px' }}>
                    <div style={{ color: '#7ec8ff', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>{product.category}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', gap: '12px' }}>
                      <h3 style={{ margin: 0, fontSize: '24px', color: '#f8fbff' }}>{product.name}</h3>
                      <span style={{ color: '#ffd166', fontSize: '20px', fontWeight: '700' }}>{product.price}</span>
                    </div>
                    <p style={{ margin: '14px 0 20px', color: '#c9d9eb', lineHeight: '1.7' }}>{product.description}</p>
                    <button type="button" style={{ width: '100%', background: '#ffb703', color: '#0b1720', border: 'none', borderRadius: '10px', padding: '12px 16px', fontWeight: '700', cursor: 'pointer' }}>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '0 20px 80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'center' }}>
            <div className="reveal" style={{ background: '#0d1f2d', border: '1px solid rgba(150, 190, 230, 0.2)', borderRadius: '24px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80" alt="Power tool detail" style={{ width: '100%', height: '100%', minHeight: '420px', objectFit: 'cover', display: 'block' }} />
            </div>

            <div className="reveal" style={{ padding: '10px 4px' }}>
              <p style={{ margin: 0, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', color: '#7ec8ff', fontWeight: '700' }}>About power tools</p>
              <h2 style={{ margin: '16px 0 18px', fontSize: '42px', color: '#f8fbff' }}>Power tools make hard work faster and smarter.</h2>
              <p style={{ margin: '0 0 18px', color: '#c9d9eb', lineHeight: '1.8', fontSize: '17px' }}>
                A power tool is any tool driven by electricity, battery, air, or fuel instead of manual force. These tools help builders, carpenters, and repair professionals cut, drill, sand, shape, and assemble materials with speed and precision.
              </p>
              <p style={{ margin: '0 0 24px', color: '#c9d9eb', lineHeight: '1.8', fontSize: '17px' }}>
                Power tools reduce effort, improve accuracy, and save time on both professional jobs and home improvement projects. From cordless drills to cutting saws, they are essential for modern construction and workshop work.
              </p>
              <button type="button" style={{ background: '#ffb703', color: '#0b1720', border: 'none', borderRadius: '10px', padding: '15px 22px', fontWeight: '700', cursor: 'pointer' }}>Explore power tools</button>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 20px 100px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>
              <p style={{ margin: 0, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', color: '#7ec8ff', fontWeight: '700' }}>Why powerpro</p>
              <h2 style={{ margin: '12px 0 0', fontSize: '42px', color: '#f8fbff' }}>Built to work harder.</h2>
            </div>

            <div className="info-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '24px' }}>
              {infoCards.map((item) => (
                <div key={item.title} style={{ background: '#0d1f2d', border: '1px solid rgba(147, 180, 220, 0.18)', borderRadius: '18px', padding: '28px 24px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, #ffb703 0%, #ff8a00 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b1720', fontWeight: '800', fontSize: '20px', marginBottom: '18px' }}>+</div>
                  <h3 style={{ margin: '0 0 10px', color: '#f8fbff', fontSize: '24px' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#bfd3eb', lineHeight: '1.7' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;

import React from "react";
import Link from "next/link";

const Home: React.FC = () => (
    <div style={{ padding: "20px" }}>
        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <div>
                <h1>Most important title on the page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante.</p>
            </div>
            <div style={{ width: "50%", position: "relative", paddingBottom: "28.25%", height: 0, overflow: "hidden", maxWidth: "100%" }}>
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                ></iframe>
            </div>
        </section>

        <section style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2>Also very important title</h2>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                {[...Array(3)].map((_, index) => (
                    <div key={index} style={{ maxWidth: "200px", textAlign: "center" }}>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.</p>
                    </div>
                ))}
            </div>
            <Link href="/contact">
                <button style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#333", color: "#fff", border: "none", cursor: "pointer" }}>
                    Contact us
                </button>
            </Link>
        </section>

        <section style={{ backgroundColor: "#f1f1f1", padding: "20px", textAlign: "center" }}>
            <h2>Less important title</h2>
            <Link href="/contact">
                <button style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#333", color: "#fff", border: "none", cursor: "pointer" }}>
                    Contact us
                </button>
            </Link>
        </section>

        <footer style={{ marginTop: "40px", textAlign: "center" }}>
            <p>Some Company 2024</p>
        </footer>
    </div>
);

export default Home;

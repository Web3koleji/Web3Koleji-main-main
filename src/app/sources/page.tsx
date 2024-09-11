import React from 'react'
import styles from "./sources.module.css";

const sources = () => {

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column" }} >
                <ul style={{ display: "flex", flexDirection: "row", paddingLeft: "17%", paddingRight: "17%", paddingTop: "2%", justifyContent: "space-between" }} >
                    <div style={{ width: "400px", height: "450px", textAlign: "center" }} >
                        <div className={styles.headergreen}>
                            <h1>eğitimler</h1>
                        </div>
                        <div className={styles.bodywhite}>
                            <span style={{ fontSize: "20px" }} >Farklı başlıklar altında Türkiye&apos;nin web 3.0 uzmanlarıyla gerçekleştirdiğimiz eğitimlerimize YouTube üzerinden erişebilirsiniz. Aynı zamanda eğitimlerimiz Skype üzerinden canlı yayın olarak verilmektedir ve herkesin katılımına ücretsiz şekilde açıktır. En yakın zamandaki canlı yayını keşfetmek için sosyal medya hesaplarımızı takip edin!</span>
                        </div>
                    </div>
                    <div style={{ width: "420px", height: "450px", textAlign: "center" }}>
                        <div className={styles.headergreen}>
                            <h1>podcast</h1>
                        </div>
                        <div className={styles.bodywhite}>
                            <span style={{ fontSize: "20px" }} >Her an dinleyebileceğiniz kısa ve öz sohbetler, uzman ve girişimcilerle konuşmalar içeren podcast serilerimize Spotify üzerinden ulaşabilirsiniz.</span>
                        </div>
                    </div>
                </ul>
                <ul style={{ display: "flex", flexDirection: "row", paddingLeft: "17%", paddingRight: "18%", justifyContent: "space-between" }} >
                    <div style={{ width: "375px", height: "450px", textAlign: "center" }}>
                        <div className={styles.headergreen}>
                            <h1>bloglar</h1>
                        </div>
                        <div className={styles.bodywhite}>
                            <span style={{ fontSize: "20px" }}>Web 3.0&apos;ın en güncel haberlerinden, tartışılan konulardan ve blokzincir genel kültüründen bahseden blog yazıları yayımlamaktayız. Herkes için erişilebilir Türkçe kaynak hazırlayan ekibimizin yazılarına medium ve mirror üzerinden ulaşabilirsiniz.</span>
                        </div>
                    </div>
                    <div style={{ width: "375px", height: "450px", textAlign: "center" }}>
                        <div className={styles.headergreen}>
                            <h1>gelecek
                                etkinlikler</h1>
                        </div>
                        <div className={styles.bodywhite}>
                            <span style={{ fontSize: "20px" }}>herkese açık takvim </span>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default sources
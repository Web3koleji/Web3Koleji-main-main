import Image from "next/image";
import styles from "./page.module.css";
import RouteBar from "../../components/routeBar/routeBar";

export default function Home() {
  return (
    <div className={styles.body} >
      <div className={styles.dmsans} style={{ justifyContent: "center" }} >
        <div className={styles.centertext}>
          <h1>web3koleji</h1>
        </div>
        <div className={styles.righth}>
          <h2 className={styles.right}>Nedir?</h2>
        </div>

        <div className={styles.list}>
          <ul className={styles.customlist}>
            <li>Web3Koleji, liseli öğrencilere web 3.0 teknolojileri üzerine ücretsiz ve kolay erişilebilir eğitimler sunmayı hedefleyen bir platformdur. Blok zinciri, Bitcoin, Ethereum, kripto paralar, NFT&apos;ler, dijital cüzdanlar, tokenler, coinler ve konsensüs mekanizmaları gibi Web 3.0&apos;ın temel kavramlarını kapsamlı bir şekilde ele alınmaktadır.</li>
            <li>Alanında uzman eğitmenlerimizle gerçekleştireceğimiz canlı yayınlar, özgün blog içerikleri, ve bilgilendirici podcast serileri ile web 3.0 dünyasına adım atmaya hazır mısınız? Başlangıç seviyesinden ileri düzeye kadar, bu heyecan verici yolculukta bize katılın ve web 3.0&apos;ın geleceğini şekillendirme fırsatını yakalayın!</li>
          </ul>
        </div>

        <div className={styles.lefth}>
          <h2 className={styles.left}>Neden Web3?</h2>
        </div>
        <div>
          <ul className={styles.customlist}>
            <li>Gelişen teknolojiyle birlikte değişen dünyayla beraber blokzincirin getirdiği yeni bir düzen hayatımıza girmeye başladı. İnsanların üçüncü partilere güvenmesine gerek duymayan, merkeziyetsiz bir sistem olan ve herkesin erişimine açık olan web 3.0 sayesinde çok daha güvenilir bir internet oluşuyor. Bununla birlikte güçlü şifreleme yöntemleri ve işlemlerin anonim gerçekleştirilmesiyle beraber şeffaf olması herkes için daha sağlıklı bir paylaşım ve etkileşim tecrübesi yaratıyor. Tüm bu avantajlarıyla dünya üzerinde bilinirliği artmaya başlayan web 3.0 gelecekte hayatımızı daha fazla etkilemeye başlayacak, bu nedenle liseli gençlerin bu konuda bilinçlenmesi geleceğe yapılacak en iyi bilgi yatırımlarındandır.</li>
          </ul>
        </div>
        <div className={styles.inlinecontainer}>
          <div>
            <h2 className={styles.purple}>Vizyon</h2>
            <ul className={styles.customcustomlist}>
              <li>Web3Koleji olarak, Türk gençlerini geleceğin dijital dünyasını hakkında farkındalığını arttırmayı ve Web 3.0 teknolojileri konusunda bilinçli bireyler yetiştirmeyi hedefliyoruz.</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.purple}>Misyon</h2>
            <ul className={styles.customcustomlist}>
              <li>Web3Koleji, liseli öğrencilere yönelik, erişilebilir ve ücretsiz eğitimlerle Web 3.0 teknolojilerinde bilgi ve farkındalık yaratmayı, böylece Türkiye&apos;deki gençleri bu yeni alanda güçlendirmeyi amaçlar.</li>
            </ul>
          </div>
        </div>
        <p></p>


        <div className={styles.customlistw}>
          <h2 className={styles.left}>Bizi Takip Edin</h2>
          <ul className={styles.customlist}>
            <li>Bu misyon ve vizyon uğruna ilerlerken sosyal medya hesaplarımızdan eğitimler gerçekleştirebiliyor veya ekip alımları yapabiliyoruz. Her zaman güncel kalmak için bizi takip etmeyi unutmayın!</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

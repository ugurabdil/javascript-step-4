/*
SORULAR
1-Türkçe 40
2-matematik 40
3-Sosyal bilgiler 20
4-Fen Bilimleri 20

-------> 100 puanı ÖSYM veriyor
------->Okul Puanı max &= veriyor
*/

let turkceDogru, turkceYanlis = 0;
let matematikdogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulpuani = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT Puanı Hesaplama Uygulamasına Hoş Geldiniz!" + yeniSatir 
+ "1-Puan Hesapla" + yeniSatir + "2-Çıkış Yap";
let secim = prompt(mesaj);

switch (secim){
    case "1":
        okulpuani = Number(prompt("Okul Puanınızı Giriniz"));
        turkceDogru = Number(prompt("Türkçe Doğru Sayınızı Giriniz"));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısını giriniz"));

        matematikdogru = Number(prompt("Matematik doğru sayısını giriniz"));
        matematikYanlis = Number(prompt("Matematik yanlış sayısını giriniz"));

        sosyalDogru = Number(prompt("Sosyal doğru sayısını giriniz"));
        sosyalYanlis = Number(prompt("Sosyal yanlış sayısını giriniz"));

        fenDogru = Number(prompt("Fen doğru sayısını giriniz"));
        fenYanlis = Number(prompt("Fen yanlış sayısını giriniz")); 


        let dogruNet = turkceDogru + matematikdogru + sosyalDogru + fenDogru;
        let yanlisNet = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let kalanDogruSayisi = dogruNet - (yanlisNet / 4);
        puan = (kalanDogruSayisi * 4) + 100 + okulpuani;
        alert("TYT Puanınız: " + puan);
        break;
    case "2":
        alert("Uygulamadan çıkış yapılmıştır");
        break;
    default:
        alert("Geçerli bir değer giriniz");
        break;
}




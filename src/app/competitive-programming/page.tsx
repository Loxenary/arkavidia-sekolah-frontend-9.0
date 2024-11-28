import {
  CompetitiveProgramming,
  CompetitiveProgrammingProps,
} from "@/components/competitive-programming/main-container";
import Whatsapp from "@images/whatsapp.svg";
import Line from "@images/line.svg";
import WebLogo from "@images/web-icon.svg";

const dummyData: CompetitiveProgrammingProps = {
  finalDate: "31 December 2022",
  finalTime: "23:59",
  contactData: [
    {
      src: Whatsapp,
      alt: "Whatsapp Logo",
      contacts: [
        {
          contact: "089507646369",
          person: "Aira",
        },
        {
          contact: "081283603881",
          person: "Ubai",
        },
      ],
    },
    {
      src: Line,
      alt: "Line Logo",
      contacts: [
        {
          contact: "airathalca",
          person: "Aira",
        },
        {
          contact: "ubaidillah_ariq",
          person: "Ubai",
        },
      ],
    },
    {
      src: WebLogo,
      alt: "@ Logo",
      contacts: [
        {
          contact: "competition@arkavidia.id",
        },
      ],
    },
  ],
  faqData: [
    {
      title: "Apa itu Competitive Programming?",
      description:
        "Competitive Programming (CP) Arkavidia adalah sebuah kompetisi pemrograman yang bertujuan untuk menguji kemampuan analisis pemecahan masalah (problem solving) dan berpikir komputasional dengan cara menyelesaikan persoalan yang diberikan dengan bahasa pemrograman tertentu dalam batasan waktu dan memori yang telah ditentukan. Kompetisi terdiri dari dua tahap yaitu babak penyisihan dan babak final",
    },
    {
      title: "Apa saja syarat peserta Competitive Programming?",
      description:
        "1. Peserta lomba merupakan 1 tim yang terdiri dari maksimal 3 mahasiswa tingkat S1 atau sederajat dari institusi yang sama.\n2. Peserta bukan merupakan anggota Himpunan Mahasiswa Informatika (HMIF) Institut Teknologi Bandung.\n3. Setiap peserta hanya terdaftar pada 1 tim pada cabang kompetisi yang sama.",
    },
    {
      title: "Apakah Competitive Programming diadakan secara berkelompok?",
      description:
        "Competitive Programming diladakan secara kelompok yang terdiri dari 1-3 orang.",
    },
    {
      title: "Berapa biaya pendaftaran Competitive Programming?",
      description:
        "Biaya pendaftaran untuk perlombaan Competitive Programming adalah Rp 90.000,- per tim.",
    },
    {
      title: "Berapa orang peserta yang akan lolos ke final?",
      description:
        "Peserta Competitive Programming dinyatakan lolos ke final jika peserta termasuk 10 tim terbaik pada babak penyisihan atau 5 tim terbaik dari Institusi berbeda yang tidak masuk ke dalam 10 tim sebelumnya yang menyelesaikan sekurang-kurangnya 1 (satu) soal.",
    },
    {
      title: "Bagaimana teknis perlombaan Competitive Programming?",
      description:
        "Perlombaan akan diadakan melalui platform DOMjudge dengan jumlah soal 12 pada setiap babak",
    },
    {
      title: "Apakah kegiatan perlombaan akan diadakan secara offline?",
      description:
        "Pada perlombaan Competitive Programming, babak penyisihan akan diadakan secara online dan babak final akan diadakan secara offline dan akan bertempat di Institut Teknologi Bandung.",
    },
  ],
  prizeList: [
    {
      prize: "Rp 7.000.000,-",
      label: "Juara 1",
    },
    {
      prize: "Rp 5.000.000,-",
      label: "Juara 2",
    },
    {
      prize: "Rp 3.000.000,-",
      label: "Juara 3",
    },
    {
      prize: "Rp 100.000,-/soal",
      label: "First Solver on Final",
    },
  ],
  time: "",
  timelineList: [
    {
      title: "Registration",
      date: "27 November 2022",
    },
    {
      title: "Close Registration",
      date: "31 Desember 2022",
    },
    {
      title: "Warmup Penyisihan",
      date: "20 Januari 2023",
    },
    {
      title: "Penyisihan",
      date: "21 Janurai 2023",
    },
    {
      title: "Pengumuman Finalis",
      date: "4 Februari 2023",
    },
    {
      title: "Warm Up Final",
      date: "24 Februari 2023",
    },
    {
      title: "Final",
      date: "25 Februari 2023",
    },
  ],
};

const CompetitiveProgrammingPage = () => {
  return (
    <CompetitiveProgramming
      finalDate={dummyData.finalDate}
      finalTime={dummyData.finalTime}
      prizeList={dummyData.prizeList}
      timelineList={dummyData.timelineList}
      time={dummyData.time}
      faqData={dummyData.faqData}
      contactData={dummyData.contactData}
    />
  );
};

export default CompetitiveProgrammingPage;

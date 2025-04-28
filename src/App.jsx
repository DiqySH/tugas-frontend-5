const orangOrang = [
  {
    nama: "Andi Wijaya",
    alamat: "Jl. Merdeka No. 10, Jakarta",
    nomorHp: "081234567890",
    photoProfile: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nama: "Siti Rahma",
    alamat: "Jl. Kenanga No. 5, Bandung",
    nomorHp: "082345678901",
    photoProfile: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    nama: "Budi Santoso",
    alamat: "Jl. Ahmad Yani No. 25, Surabaya",
    nomorHp: "083456789012",
    photoProfile: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    nama: "Dewi Lestari",
    alamat: "Jl. Mawar No. 7, Yogyakarta",
    nomorHp: "084567890123",
    photoProfile: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    nama: "Rizky Pratama",
    alamat: "Jl. Melati No. 8, Medan",
    nomorHp: "085678901234",
    photoProfile: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    nama: "Intan Permata",
    alamat: "Jl. Anggrek No. 9, Makassar",
    nomorHp: "086789012345",
    photoProfile: "https://randomuser.me/api/portraits/women/34.jpg"
  },
  {
    nama: "Fajar Nugroho",
    alamat: "Jl. Cemara No. 3, Bekasi",
    nomorHp: "087890123456",
    photoProfile: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    nama: "Nur Aisyah",
    alamat: "Jl. Teratai No. 2, Semarang",
    nomorHp: "088901234567",
    photoProfile: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    nama: "Taufik Hidayat",
    alamat: "Jl. Dahlia No. 4, Palembang",
    nomorHp: "089012345678",
    photoProfile: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    nama: "Lina Marlina",
    alamat: "Jl. Flamboyan No. 6, Balikpapan",
    nomorHp: "081012345678",
    photoProfile: "https://randomuser.me/api/portraits/women/78.jpg"
  }
];

function Judul() {
  return (
    <div className="w-full max-w-[600px] mt-4">
      <h1 className="text-2xl">My Personal</h1>
      <h2 className="text-2xl font-bold">Contact Book</h2>
    </div>
  );
}

function CardsList({photoProfile, nama, alamat, nomorHp}) {
  return (
    <div className="max-w-[600px] p-5 flex flex-col gap-4 border-[#EFEFEF] border-2 bg-white shadow-xl rounded-xl">
      <div className="flex items-center gap-4">
        <img src={photoProfile} alt="" className="rounded-[50%] max-w-16"/>
        <p>{nama}</p>
      </div>
      <hr className="w-full text-[#EFEFEF]"/>
      <div className="flex w-full">
        <p className="flex-1/2">{alamat}</p>
        <a href={"https://wa.me/"+ nomorHp} className="flex-1/2 underline text-blue-500">{nomorHp}</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Judul/>
      <div className="max-w-[600px] w-full flex flex-col gap-4 mt-4 pb-4">
        {
          orangOrang.map((orang) => (
            <CardsList nama={orang.nama} photoProfile={orang.photoProfile} alamat={orang.alamat} nomorHp={orang.nomorHp}/>
          ))
        }
      </div>
    </section>
  );
}
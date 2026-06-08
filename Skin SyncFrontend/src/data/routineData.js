const routineData = {
  SKIN1004: {
    am: [
      { step: 1, time: "07:00", type: "Cleanser", product: "Ampoule Foam", desc: "Busakan di tangan dulu, baru pijat ke wajah agar tidak friksi berlebih.", frequency: "Daily" },
      { step: 2, time: "07:05", type: "Toner", product: "Centella Toning Toner", desc: "Tepuk lembut saat kulit masih lembap (damp skin) untuk hidrasi maksimal.", frequency: "Daily" },
      { step: 3, time: "07:08", type: "Ampoule", product: "Centella Ampoule", desc: "Gunakan 2-3 tetes. Fokuskan pada area yang kemerahan atau iritasi.", frequency: "Daily" },
      { step: 4, time: "07:10", type: "Moisturizer", product: "Soothing Cream", desc: "Oleskan tipis untuk mengunci kadar air di kulit.", frequency: "Daily" },
      { step: 5, time: "07:15", type: "Sunscreen", product: "Water-Fit Sun Serum", desc: "WAJIB! Pakai sebanyak 2 jari penuh 15 menit sebelum keluar.", frequency: "Daily" },
    ],
    pm: [
      { step: 1, time: "19:00", type: "First Cleanse", product: "Cleansing Oil", desc: "Pijat wajah 60 detik untuk meluruhkan sunscreen dan polusi.", frequency: "Daily" },
      { step: 2, time: "19:05", type: "Second Cleanse", product: "Ampoule Foam", desc: "Bilas sisa minyak hingga bersih tuntas.", frequency: "Daily" },
      { step: 3, time: "19:10", type: "Toner", product: "Centella Toning Toner", desc: "Kembalikan pH alami kulit setelah mencuci muka.", frequency: "Daily" },
      { step: 4, time: "19:15", type: "Ampoule", product: "Centella Ampoule", desc: "Gunakan layering (2x usap) untuk nutrisi ekstra saat tidur.", frequency: "Daily" },
      { step: 5, time: "19:20", type: "Moisturizer", product: "Soothing Cream", desc: "Pakai agak tebal sebagai sleeping mask untuk memperbaiki skin barrier.", frequency: "Daily" },
    ],
    weekly: [
      { day: "Wednesday", type: "Exfoliation", product: "Toner Eksfoliasi (Kapas)", desc: "Angkat sel kulit mati agar wajah tidak kusam. Jangan digosok kuat." },
      { day: "Sunday", type: "Skin Reset", product: "Hydrating Mask", desc: "Fokus melembapkan saja. Istirahatkan kulit dari bahan aktif." }
    ]
  },

  Glad2Glow: {
    am: [
      { step: 1, time: "07:00", type: "Cleanser", product: "Milk Amino / Tremella", desc: "Pembersih gentle, tidak merusak skin barrier pagi hari.", frequency: "Daily" },
      { step: 2, time: "07:05", type: "Toner", product: "Soothing / Bright Toner", desc: "Segarkan wajah agar siap menerima serum.", frequency: "Daily" },
      { step: 3, time: "07:08", type: "Serum", product: "Pomegranate / Acne Serum", desc: "Oleskan merata. Pomegranate untuk cerah, Centella untuk jerawat.", frequency: "Daily" },
      { step: 4, time: "07:10", type: "Moisturizer", product: "Pomegranate / Centella Gel", desc: "Tekstur gel ringan, cocok untuk kulit berminyak.", frequency: "Daily" },
      { step: 5, time: "07:15", type: "Sunscreen", product: "Ultra Light SPF 50", desc: "Jangan skip! Sinar UV adalah penyebab utama noda hitam susah hilang.", frequency: "Daily" },
    ],
    pm: [
      { step: 1, time: "20:00", type: "Cleanser", product: "Milk Amino / Tremella", desc: "Pastikan wajah bersih dari debu seharian.", frequency: "Daily" },
      { step: 2, time: "20:05", type: "Toner", product: "Soothing / Bright Toner", desc: "Hidrasi kembali kulit yang lelah.", frequency: "Daily" },
      { step: 3, time: "20:08", type: "Serum", product: "Pomegranate / Acne Serum", desc: "Biarkan bahan aktif bekerja memperbaiki kulit semalaman.", frequency: "Daily" },
      { step: 4, time: "20:10", type: "Moisturizer", product: "Pomegranate / Centella Gel", desc: "Kunci semua nutrisi agar pagi hari kulit terasa kenyal.", frequency: "Daily" },
    ],
    weekly: [
      { day: "Friday", type: "Acne/Pore Detox", product: "Mugwort Stick Mask", desc: "Pakai 15 menit untuk membersihkan pori-pori tersumbat." }
    ]
  },

  Scarlett: {
    am: [
      { step: 1, time: "07:00", type: "Cleanser", product: "Brightening / Acne Wash", desc: "Ada butiran scrub halus dan Vitamin E untuk mencerahkan.", frequency: "Daily" },
      { step: 2, time: "07:05", type: "Toner", product: "Brightly / Acne Essence", desc: "Tuang ke tangan, tepuk perlahan. Ada sensasi dingin menyegarkan.", frequency: "Daily" },
      { step: 3, time: "07:08", type: "Serum", product: "Brightly / Acne Serum", desc: "Teteskan 2-3 pump. Serum ini cukup kental, ratakan dengan baik.", frequency: "Daily" },
      { step: 4, time: "07:10", type: "Moisturizer", product: "Day Cream", desc: "Day cream Scarlett sudah ada efek tone-up instan.", frequency: "Daily" },
      { step: 5, time: "07:15", type: "Sunscreen", product: "Ultra Light Daily SPF 50", desc: "Wajib timpa sunscreen meski day cream sudah ada SPF-nya.", frequency: "Daily" },
    ],
    pm: [
      { step: 1, time: "19:30", type: "Cleanser", product: "Brightening / Acne Wash", desc: "Bersihkan kotoran hingga tuntas.", frequency: "Daily" },
      { step: 2, time: "19:35", type: "Toner", product: "Brightly / Acne Essence", desc: "Rehidrasi kulit setelah cuci muka.", frequency: "Daily" },
      { step: 3, time: "19:40", type: "Serum", product: "Brightly / Acne Serum", desc: "Kandungan aktif bekerja maksimal saat tidak terkena matahari.", frequency: "Daily" },
      { step: 4, time: "19:45", type: "Moisturizer", product: "Night Cream", desc: "Krim malam Scarlett bekerja ekstra untuk regenerasi sel.", frequency: "Daily" },
    ],
    weekly: [
      { day: "Saturday", type: "Weekly Peel", product: "Peeling Soothing Toner", desc: "Gunakan kapas. Jangan digosok. Maksimal 2-3x seminggu."}
    ]
  },

  Skintific: {
    am: [
      { step: 1, time: "07:00", type: "Cleanser", product: "5X Ceramide Low pH", desc: "Pembersih gentle pH 5.5, menjaga barrier kulit tetap sehat.", frequency: "Daily" },
      { step: 2, time: "07:05", type: "Toner", product: "5X Ceramide / Glycolic", desc: "Menenangkan kemerahan instan. Bisa dikompres (CSM) jika kulit kering.", frequency: "Daily" },
      { step: 3, time: "07:08", type: "Serum", product: "Symwhite 377 / Barrier", desc: "Symwhite untuk noda hitam, Barrier serum untuk perbaikan tekstur.", frequency: "Daily" },
      { step: 4, time: "07:10", type: "Moisturizer", product: "5X Ceramide Barrier Gel", desc: "Holy grail! Oleskan merata untuk memperkuat lapisan kulit.", frequency: "Daily" },
      { step: 5, time: "07:15", type: "Sunscreen", product: "Serum Sunscreen / Mist", desc: "Proteksi UV dengan kandungan Ceramide. Re-apply pakai spray lebih praktis!", frequency: "Daily" },
    ],
    pm: [
      { step: 1, time: "20:00", type: "Cleanser", product: "5X Ceramide Low pH", desc: "Bersihkan wajah tanpa merusak lapisan pelindung kulit.", frequency: "Daily" },
      { step: 2, time: "20:05", type: "Toner", product: "5X Ceramide Soothing", desc: "Kembalikan kelembapan kulit.", frequency: "Daily" },
      { step: 3, time: "20:10", type: "Serum", product: "Symwhite / Retinol (Opsional)", desc: "Gunakan serum aktif. Jika pakai Retinol, hanya malam hari saja.", frequency: "Daily" },
      { step: 4, time: "20:15", type: "Moisturizer", product: "5X Ceramide Barrier Gel", desc: "Oleskan layer kedua jika kulitmu sangat kering atau setelah pakai retinol.", frequency: "Daily" },
    ],
    weekly: [
      { day: "Wednesday", type: "Deep Cleanse", product: "Mugwort Stick Mask", desc: "15 menit untuk membersihkan komedo dan menenangkan jerawat."},
      { day: "Saturday", type: "Booster", product: "Sheet Mask", desc: "Hidrasi intensif di akhir pekan."}
    ]
  },

  Wardah: {
    am: [
      { step: 1, time: "07:00", type: "Cleanser", product: "Acnederm / Crystal Secret", desc: "Busakan dan pijat wajah. Bilas dengan air suhu ruang.", frequency: "Daily" },
      { step: 2, time: "07:05", type: "Toner", product: "Pure Treatment Essence", desc: "Tepuk-tepuk ringan agar penyerapan skincare selanjutnya maksimal.", frequency: "Daily" },
      { step: 3, time: "07:08", type: "Serum", product: "Ampoule / Serum", desc: "Aplikasikan merata. Teksturnya ringan dan cepat meresap.", frequency: "Daily" },
      { step: 4, time: "07:10", type: "Moisturizer", product: "Day Cream / Gel", desc: "Pilih Day Cream. Biasanya sudah ada SPF ringan, tapi tetap timpa sunscreen.", frequency: "Daily" },
      { step: 5, time: "07:15", type: "Sunscreen", product: "UV Shield Airy Smooth", desc: "Teknologi SkinBoost DNA melindungi kulitmu dari matahari jahat!", frequency: "Daily" },
    ],
    pm: [
      { step: 1, time: "19:00", type: "Cleanser", product: "Acnederm / Crystal Secret", desc: "Bersihkan sisa makeup dan polusi.", frequency: "Daily" },
      { step: 2, time: "19:05", type: "Toner", product: "Pure Treatment Essence", desc: "Segarkan kembali wajahmu.", frequency: "Daily" },
      { step: 3, time: "19:10", type: "Serum", product: "Ampoule / Serum", desc: "Gunakan rutin setiap malam untuk hasil maksimal.", frequency: "Daily" },
      { step: 4, time: "19:15", type: "Moisturizer", product: "Night Cream / Gel", desc: "Krim malam Wardah biasanya kaya antioksidan untuk pencerah.", frequency: "Daily" },
    ],
    weekly: [
      { day: "Sunday", type: "Masking", product: "Clay Mask / Sheet Mask", desc: "Me time! Gunakan masker sesuai kebutuhan kulitmu."}
    ]
  },

  default: {
    am: [
      { step: 1, time: "07:00", type: "Cleanser", product: "Facial Wash", desc: "Bersihkan wajah dari kotoran sisa semalam.", frequency: "Daily" },
      { step: 2, time: "07:05", type: "Toner", product: "Hydrating Toner", desc: "Segarkan wajah dan siapkan kulit menerima nutrisi.", frequency: "Daily" },
      { step: 3, time: "07:08", type: "Serum", product: "Serum", desc: "Gunakan serum sesuai kebutuhan kulitmu.", frequency: "Daily" },
      { step: 4, time: "07:10", type: "Moisturizer", product: "Day Cream/Gel", desc: "Jaga kelembapan skin barrier seharian.", frequency: "Daily" },
      { step: 5, time: "07:15", type: "Sunscreen", product: "SPF Protection", desc: "Jangan skip! Lindungi kulit dari penuaan dini akibat UV.", frequency: "Daily" },
    ],
    pm: [
      { step: 1, time: "20:00", type: "Cleanser", product: "Facial Wash", desc: "Bersihkan debu dan minyak seharian.", frequency: "Daily" },
      { step: 2, time: "20:05", type: "Toner", product: "Hydrating Toner", desc: "Hidrasi kembali kulitmu.", frequency: "Daily" },
      { step: 3, time: "20:08", type: "Serum", product: "Night Serum", desc: "Perbaikan kulit maksimal terjadi saat tidur.", frequency: "Daily" },
      { step: 4, time: "20:10", type: "Moisturizer", product: "Night Cream", desc: "Kunci semua nutrisi semalaman.", frequency: "Daily" },
    ],
    weekly: []
  }
};

export default routineData;
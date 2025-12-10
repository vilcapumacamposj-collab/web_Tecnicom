// Base de datos de productos con categorías y sugerencias
const productosDB = [
    // ========== LAPTOPS ==========
    { 
        id: 1, 
        nombre: "Laptop Gamer Asus TUF F15", 
        precio: 5559.90, 
        imagen: "https://oechsle.vteximg.com.br/arquivos/ids/20876683/20424436jpg.jpg?v=638791427407570000", 
        categoria: "Laptops", 
        descripcion: "Laptop gamer de alto rendimiento con procesador Intel i7",
        tags: ["gamer", "asus", "intel", "laptop", "tuf"]
    },
    { 
        id: 2, 
        nombre: "Laptop HP ENVY X8", 
        precio: 3299.90, 
        imagen: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg", 
        categoria: "Laptops", 
        descripcion: "Laptop premium para trabajo y entretenimiento",
        tags: ["hp", "envy", "ultrabook", "laptop"]
    },
    { 
        id: 3, 
        nombre: "Laptop Gamer Acer Nitro 15", 
        precio: 2559.90, 
        imagen: "https://images.pcel.com/1600/Computadoras-Laptops-Acer-NH-QESAA-004-492050-piU4EbyZw1jAFqxz.jpg", 
        categoria: "Laptops", 
        descripcion: "Laptop gamer con excelente relación calidad-precio",
        tags: ["acer", "nitro", "gamer", "laptop"]
    },
    { 
        id: 4, 
        nombre: "Laptop Gamer Lenovo LOQ 5", 
        precio: 4789.90, 
        imagen: "https://toqen.pe/web/image/product.template/3321/image_1920?unique=6ecbb82", 
        categoria: "Laptops", 
        descripcion: "Laptop gamer para gaming competitivo",
        tags: ["lenovo", "loq", "gamer", "laptop"]
    },
    { 
        id: 5, 
        nombre: "Laptop Gamer HP Victus 15-fb3020la", 
        precio: 3299.00, 
        imagen: "https://oechsle.vteximg.com.br/arquivos/ids/20876683/20424436jpg.jpg?v=638791427407570000", 
        categoria: "Laptops", 
        descripcion: "Laptop Gamer Hp Victus 15-fb3020la, amd Ryzen 7, 16gb Ram, 512gb Ssd, nvidia Geforce Rtx 3050, fhd,15.6",
        tags: ["hp", "victus", "gamer", "ryzen", "rtx3050", "laptop"]
    },
    { 
        id: 6, 
        nombre: "Laptop ASUS Zenbook Pro Duo", 
        precio: 4599.00, 
        imagen: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg", 
        categoria: "Laptops", 
        descripcion: "Laptop ASUS Zenbook Pro Duo premium",
        tags: ["asus", "zenbook", "premium", "laptop"]
    },
    { 
        id: 7, 
        nombre: "Laptop HP 15-fd0253la Intel Core i5", 
        precio: 2199.00, 
        imagen: "https://images.pcel.com/1600/Computadoras-Laptops-Acer-NH-QESAA-004/492050-piU4EbyZw1jAFqxz.jpg", 
        categoria: "Laptops", 
        descripcion: "Laptop Hp 15-fd0253la Intel Core i5-1334u 8gb Ram 512gb Ssd 15.6",
        tags: ["hp", "intel", "core i5", "laptop"]
    },
    { 
        id: 8, 
        nombre: "Laptop Gamer Intel Core I5 Rtx3050 Lenovo LOQ", 
        precio: 4789.00, 
        imagen: "https://toqen.pe/web/image/product.template/3321/image_1920?unique=6ecbb82", 
        categoria: "Laptops", 
        descripcion: "Gamer Intel Core I5 Rtx3050 24gb 512gb Ssd Loq 12° Gen 15.6 Fhd 144 Hz",
        tags: ["lenovo", "loq", "gamer", "rtx3050", "intel", "core i5"]
    },
    { 
        id: 9, 
        nombre: "LAPTOP ASUS ROG STRIX G615JMR-RV165W", 
        precio: 4999.00, 
        imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/WOP/1/2004361673659/full_image-2004361673659", 
        categoria: "Laptops", 
        descripcion: "INTEL CORE I7 16GB RAM 512GB SSD 16 RTX 5060",
        tags: ["rog", "strix", "asus", "rtx5060", "gamer", "core i7"]
    },
    { 
        id: 10, 
        nombre: "Laptop ROG Strix G16 R9", 
        precio: 7999.00, 
        imagen: "https://media.falabella.com/falabellaPE/145917725_01/w=1500,h=1500,fit=pad", 
        categoria: "Laptops", 
        descripcion: "16GB RAM 1TB SSD RTX 5060 8GB W11",
        tags: ["rog", "strix", "r9", "rtx5060", "gamer"]
    },
    { 
        id: 11, 
        nombre: "Laptop ROG Strix SCAR 18 (2025) G835LX-SA119W", 
        precio: 21999.00, 
        imagen: "https://pe.store.asus.com/media/catalog/product/r/o/rog-strix-scar-18_g835lx-sa119w_1.png?width=439&height=439&store=es_PE&image-type=image", 
        categoria: "Laptops", 
        descripcion: "Laptop ROG Strix SCAR 18 (2025)",
        tags: ["rog", "scar", "premium", "gamer", "laptop"]
    },
    { 
        id: 12, 
        nombre: "LAPTOP ASUS ROG STRIX G18 CORE ULTRA 9", 
        precio: 21999.00, 
        imagen: "https://media.falabella.com/falabellaPE/149503195_01/w=1500,h=1500,fit=pad", 
        categoria: "Laptops", 
        descripcion: "CORE ULTRA 9-275HX 32GB RAM 2TB SSD RTX 5080 16GB 18 2.5K, WIN11",
        tags: ["rog", "ultra9", "rtx5080", "premium", "laptop"]
    },
    
    // ========== PC GAMER COMPLETAS ==========
    { 
        id: 13, 
        nombre: "PC INTEL I5 14400F + RTX 3060", 
        precio: 2699.00, 
        imagen: "imagenpc.png", 
        categoria: "PC Gamer", 
        descripcion: "PC INTEL I5 14400F + H610M + 16GB DDR5 + 500GB M.2 + RTX 3060",
        tags: ["pc", "gamer", "intel", "rtx3060", "computadora"]
    },
    { 
        id: 14, 
        nombre: "PC RYZEN 5 7600X + RX 7600 XT", 
        precio: 3219.00, 
        imagen: "imagenpc2.png", 
        categoria: "PC Gamer", 
        descripcion: "PC RYZEN 5 7600X + B650M + 16GB DDR5 + 500GB M.2 + RX 7600 XT",
        tags: ["pc", "gamer", "ryzen", "rx7600", "computadora"]
    },
    { 
        id: 15, 
        nombre: "PC RYZEN 7 7700 + RX 7600 XT", 
        precio: 3662.00, 
        imagen: "imagenpc3.png", 
        categoria: "PC Gamer", 
        descripcion: "PC RYZEN 7 7700 + B650M + 16GB DDR5 + 500GB M.2 + RX 7600 XT",
        tags: ["pc", "gamer", "ryzen7", "rx7600"]
    },
    { 
        id: 16, 
        nombre: "PC INTEL I5 14400F + RTX 5070", 
        precio: 4799.00, 
        imagen: "imagenpc4.png", 
        categoria: "PC Gamer", 
        descripcion: "PC INTEL I5 14400F + B760M + 32GB DDR5 + 1TB M.2 + RTX 5070",
        tags: ["pc", "gamer", "intel", "rtx5070"]
    },
    { 
        id: 17, 
        nombre: "PC RYZEN 7 7700X + RX 7600 XT", 
        precio: 5038.00, 
        imagen: "imagenpc5.png", 
        categoria: "PC Gamer", 
        descripcion: "PC RYZEN 7 7700X + B650M + 32GB DDR5 + 1TB M.2 + RX 7600 XT",
        tags: ["pc", "gamer", "ryzen7", "rx7600"]
    },
    { 
        id: 18, 
        nombre: "PC Gamer Haku Red Plus Ryzen 5 8600G", 
        precio: 2399.00, 
        imagen: "https://mipclista.com/img/p/9/0/5/0/9050.jpg", 
        categoria: "PC Gamer", 
        descripcion: "PC Gamer completa Ryzen 5 8600G",
        tags: ["pc", "gamer", "ryzen5", "haku", "computadora"]
    },
    { 
        id: 19, 
        nombre: "Computadora PC GAMER RYZEN 7 5700G", 
        precio: 2479.00, 
        imagen: "https://media.falabella.com/falabellaPE/114488217_01/w=1500,h=1500,fit=pad", 
        categoria: "PC Gamer", 
        descripcion: "Computadora PC GAMER RYZEN 7 5700G 16GB 512GB Monitor 27",
        tags: ["pc", "gamer", "ryzen7", "computadora", "monitor"]
    },
    { 
        id: 20, 
        nombre: "PC Gamer Draco Black Blue Intel Core i9 Ultra 285K", 
        precio: 13299.00, 
        imagen: "https://mipclista.com/img/p/9/1/3/8/9138.jpg", 
        categoria: "PC Gamer", 
        descripcion: "PC Gamer Draco Black Blue Intel Core i9 Ultra 285K",
        tags: ["pc", "gamer", "draco", "core i9", "premium"]
    },
    { 
        id: 21, 
        nombre: "PC Gamer K-PLUS Orange Core i7 14700F", 
        precio: 4699.00, 
        imagen: "https://mipclista.com/img/p/8/3/2/3/8323.jpg", 
        categoria: "PC Gamer", 
        descripcion: "PC Gamer K-PLUS Orange Core i7 14700F 14th",
        tags: ["pc", "gamer", "core i7", "k-plus"]
    },
    { 
        id: 22, 
        nombre: "PC Gamer Draco RGB Plus Core I9 12900KF", 
        precio: 6499.00, 
        imagen: "https://oechsle.vteximg.com.br/arquivos/ids/22548707-1000-1000/COMPUTADORA-PC-GAMER-DRACO-RGB-PLUS-CORE-I9-12900KF-32GB-1TB-24-RTX5060-8GB-MI-PC-LISTA-MIPCLISTA.jpg?v=638961607575630000", 
        categoria: "PC Gamer", 
        descripcion: "COMPUTADORA PC GAMER DRACO RGB PLUS CORE I9 12900KF 32GB 1TB 24 RTX5060 8GB",
        tags: ["pc", "gamer", "draco", "core i9", "rtx5060", "rgb"]
    },
    { 
        id: 23, 
        nombre: "PC Gamer Hero RGB Core ULTRA 7 265KF", 
        precio: 10000.00, 
        imagen: "https://mipclista.com.pe/9136-home_default/pc-gamer-hero-pink-core-i7-13700f-13th.jpg", 
        categoria: "PC Gamer", 
        descripcion: "PC Gamer Hero RGB Core ULTRA 7 265KF",
        tags: ["pc", "gamer", "hero", "core ultra 7", "rgb"]
    },
    { 
        id: 24, 
        nombre: "PC Gamer Draco Red Core I7 8th", 
        precio: 2299.00, 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQnNLVfhBMKcCSaywsbadP3PTwQOar1EWDmYdqULgQOoBe-VQMJ0I9MudB7ZI-lc-oL4&usqp=CAU", 
        categoria: "PC Gamer", 
        descripcion: "PC Gamer Draco Red Core I7 8th",
        tags: ["pc", "gamer", "draco", "core i7"]
    },
    
    // ========== COMPONENTES ==========
    { 
        id: 25, 
        nombre: "Disco SSD 500GB Kingston NV3", 
        precio: 299.90, 
        imagen: "https://m.media-amazon.com/images/I/71NfMZKkpQL._UF894,1000_QL80_.jpg", 
        categoria: "Componentes", 
        descripcion: "SSD NVMe de alta velocidad para PC",
        tags: ["ssd", "kingston", "nvme", "almacenamiento", "500gb"]
    },
    { 
        id: 26, 
        nombre: "Memoria RAM DDR4 16GB 3200MT/s", 
        precio: 249.90, 
        imagen: "https://elektra.vtexassets.com/arquivos/ids/16876173/image-78280499f4424c2ab11b5e051a479e61.jpg?v=638914231606300000", 
        categoria: "Componentes", 
        descripcion: "Memoria RAM de alto rendimiento Kingston FURY",
        tags: ["ram", "kingston", "ddr4", "memoria", "16gb"]
    },
    { 
        id: 27, 
        nombre: "Tarjeta de video GeForce RTX 3050", 
        precio: 799.90, 
        imagen: "https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-nvidia-geforce-rtx-3050-windforce-oc-8gb-gddr6-dlss-ray-tracing-gv-n3050wf2oc-8gd_173446.jpg", 
        categoria: "Componentes", 
        descripcion: "Tarjeta gráfica NVIDIA RTX 3050 para gaming",
        tags: ["rtx", "nvidia", "gpu", "tarjeta video", "3050"]
    },
    { 
        id: 28, 
        nombre: "Gabinete Antryx RX 260", 
        precio: 199.90, 
        imagen: "https://www.pcfactory.com.pe/public/foto/3067/1_1000.jpg?t=1727729600003", 
        categoria: "Componentes", 
        descripcion: "Gabinete para PC gamer con RGB",
        tags: ["gabinete", "antryx", "case", "pc", "gamer"]
    },
    { 
        id: 29, 
        nombre: "Monitor LG Ultragear 27 QHD", 
        precio: 1599.90, 
        imagen: "https://imagenes.deltron.com.pe//images/productos/on-line/items/large/mo/v2/mov27lg27gr93u.jpg", 
        categoria: "Componentes", 
        descripcion: "Monitor gaming 27\" QHD 240hz IPS",
        tags: ["monitor", "lg", "gaming", "ultragear", "27"]
    },
    { 
        id: 30, 
        nombre: "Placa madre Z790 PRO RS Wifi Asrock", 
        precio: 1289.90, 
        imagen: "https://ultimainformatica.com/1336493-thickbox_default/asrock-z790-pro-rs-d4-intel-z790-lga-1700-atx.jpg", 
        categoria: "Componentes", 
        descripcion: "Placa madre Z790 PRO RS Wifi Asrock",
        tags: ["placa", "madre", "asrock", "z790", "wifi"]
    },
    { 
        id: 31, 
        nombre: "Fuente de poder 1200W 80p Gold Asus Rog", 
        precio: 999.90, 
        imagen: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200902072605.png", 
        categoria: "Componentes", 
        descripcion: "Fuente de poder 1200W 80p Gold Asus Rog",
        tags: ["fuente", "poder", "asus", "rog", "1200w", "gold"]
    },
    { 
        id: 32, 
        nombre: "Mouse RedDragon Griffin M607", 
        precio: 359.90, 
        imagen: "https://redragon.es/content/uploads/2021/04/GRIFFIN-B.png", 
        categoria: "Componentes", 
        descripcion: "Mouse RedDragon Griffin M607",
        tags: ["mouse", "redragon", "griffin", "gamer"]
    },
    
    // ========== PROCESADORES ==========
    { 
        id: 33, 
        nombre: "Intel Core i9 14900K", 
        precio: 2799.00, 
        imagen: "https://www.impacto.com.pe/storage/products/lg/175458445473396.webp", 
        categoria: "Procesadores", 
        descripcion: "Procesador Intel Core i9 14900K de alto rendimiento",
        tags: ["intel", "core i9", "procesador", "cpu", "14900k"]
    },
    { 
        id: 34, 
        nombre: "Intel Core i7 13700k", 
        precio: 2099.00, 
        imagen: "https://www.impacto.com.pe/storage/products/lg/17387884735165.webp", 
        categoria: "Procesadores", 
        descripcion: "Procesador Intel Core i7 13700k",
        tags: ["intel", "core i7", "procesador", "13700k"]
    },
    { 
        id: 35, 
        nombre: "Intel Core i5 14600k", 
        precio: 899.00, 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNU5fYIaKACJr5Em4SsVjOPoZO4GI64Hw0fg&s", 
        categoria: "Procesadores", 
        descripcion: "Procesador Intel Core i5 14600k",
        tags: ["intel", "core i5", "procesador", "14600k"]
    },
    { 
        id: 36, 
        nombre: "Procesador Intel Core i5-13400F", 
        precio: 959.00, 
        imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/347292-1200-1200?v=638440847753570000&width=1200&height=1200&aspect=true", 
        categoria: "Procesadores", 
        descripcion: "Procesador Intel Core i5-13400F, 2.5GHZ, 6+4 cores, LGA1700",
        tags: ["intel", "core i5", "procesador", "13400f"]
    },
    { 
        id: 37, 
        nombre: "Procesador AMD Ryzen 7 7700x", 
        precio: 1299.00, 
        imagen: "https://www.impacto.com.pe/storage/products/md/17387901962069.webp", 
        categoria: "Procesadores", 
        descripcion: "Procesador Amd Ryzen 7 7700x 4.5ghz Hasta 5.4ghz",
        tags: ["amd", "ryzen7", "procesador", "7700x"]
    },
    { 
        id: 38, 
        nombre: "Procesador AMD Ryzen 9 9950x3d", 
        precio: 2999.00, 
        imagen: "https://www.impacto.com.pe/storage/products/md/174198531943800.webp", 
        categoria: "Procesadores", 
        descripcion: "Procesador Amd Ryzen 9 9950x3d 4.3ghz Hasta 5.7ghz, 128mb Am5, 16 Nucleos",
        tags: ["amd", "ryzen9", "procesador", "9950x3d", "premium"]
    },
    { 
        id: 39, 
        nombre: "Procesador AMD Ryzen 5 7600X", 
        precio: 759.00, 
        imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/371424-1200-1200?v=638538902141070000&width=1200&height=1200&aspect=true", 
        categoria: "Procesadores", 
        descripcion: "Procesador AMD Ryzen 5 7600X 6 cores, 5.3Ghz, AM5",
        tags: ["amd", "ryzen5", "procesador", "7600x"]
    },
    { 
        id: 40, 
        nombre: "Procesador AMD Ryzen 5 8600G", 
        precio: 999.00, 
        imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/355281-1200-1200?v=638470000554700000&width=1200&height=1200&aspect=true", 
        categoria: "Procesadores", 
        descripcion: "Procesador AMD Ryzen 5 8600G (IA), 5Ghz, 6 cores, AM5, 65W",
        tags: ["amd", "ryzen5", "procesador", "8600g", "ia"]
    },
    
    // ========== MONITORES ==========
    { 
        id: 41, 
        nombre: "Monitor Gamer MASTER G 27", 
        precio: 619.00, 
        imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4709/PMP20000358152/full_image-1.jpeg", 
        categoria: "Monitores", 
        descripcion: "MONITOR GAMER MASTER G 27 180Hz",
        tags: ["monitor", "gamer", "27", "180hz", "master"]
    },
    { 
        id: 42, 
        nombre: "Monitor gaming UltraGear OLED 32 4K", 
        precio: 3999.00, 
        imagen: "https://www.lg.com/content/dam/channel/wcms/pe/images/monitores/32gs95uv-b/gallery/ultragear-32gs95uv-b-gallery-02-2010.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800", 
        categoria: "Monitores", 
        descripcion: "Monitor gaming UltraGear OLED 32 4K LG",
        tags: ["monitor", "lg", "ultragear", "oled", "4k", "32"]
    },
    { 
        id: 43, 
        nombre: "Monitor Gamer OLED UltraGear 27", 
        precio: 2499.00, 
        imagen: "https://www.lg.com/content/dam/channel/wcms/pe/images/monitores/27gs95qe-b_awf_espr_pe_c/gallery/ultragear-27gs95qe-galley-02-2010.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800", 
        categoria: "Monitores", 
        descripcion: "Monitor Gamer OLED UltraGear 27 LG",
        tags: ["monitor", "lg", "ultragear", "oled", "27", "gamer"]
    },
    { 
        id: 44, 
        nombre: "MONITOR GAMER CURVO Teros TE-3411G", 
        precio: 1299.00, 
        imagen: "https://media.falabella.com/falabellaPE/140073618_01/w=1500,h=1500,fit=pad", 
        categoria: "Monitores", 
        descripcion: "MONITOR GAMER CURVO Teros TE-3411G 34 180HZ 1MS 2K",
        tags: ["monitor", "gamer", "curvo", "teros", "34", "2k"]
    },
    
    // ========== PLACAS MADRE ==========
    { 
        id: 45, 
        nombre: "Placa Madre ASUS Prime Z790-P", 
        precio: 599.00, 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldYLBjQT9Ecsbu2U9FTzlDIm7mSoWppZxZA&s", 
        categoria: "Placas Madre", 
        descripcion: "Placa Madre ASUS Prime Z790-P",
        tags: ["placa", "madre", "asus", "z790", "prime"]
    },
    { 
        id: 46, 
        nombre: "Placa madre MSI B450 GAMING PLUS", 
        precio: 999.00, 
        imagen: "https://asset.msi.com/resize/image/global/product/product_3_20180716112125_5b4c0f3535ada.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", 
        categoria: "Placas Madre", 
        descripcion: "Placa madre MSI B450 GAMING PLUS",
        tags: ["placa", "madre", "msi", "b450", "gaming"]
    },
    { 
        id: 47, 
        nombre: "PLACA ASROCK Z790 PG SONIC", 
        precio: 1136.00, 
        imagen: "https://cdn.memorykings.pe/files/2023/01/18/346382-MK033747D.jpg", 
        categoria: "Placas Madre", 
        descripcion: "PLACA ASROCK Z790 PG SONIC",
        tags: ["placa", "madre", "asrock", "z790", "sonic"]
    },
    
    // ========== MEMORIA RAM ==========
    { 
        id: 48, 
        nombre: "Memoria Ram Xpg Ddr4 16gb Spectrix", 
        precio: 190.00, 
        imagen: "https://www.impacto.com.pe/storage/products/md/173868453832535.webp", 
        categoria: "Memoria RAM", 
        descripcion: "Memoria Ram Xpg Ddr4 16gb Spectrix",
        tags: ["ram", "xpg", "ddr4", "16gb", "spectrix"]
    },
    { 
        id: 49, 
        nombre: "Memoria Ram Acer Ddr4 16gb Predator", 
        precio: 240.00, 
        imagen: "https://www.impacto.com.pe/storage/products/md/173860643993951.webp", 
        categoria: "Memoria RAM", 
        descripcion: "Memoria Ram Acer Ddr4 16gb Predator",
        tags: ["ram", "acer", "ddr4", "16gb", "predator"]
    },
    { 
        id: 50, 
        nombre: "Memoria Ram Kingston Fury 32gb", 
        precio: 136.00, 
        imagen: "https://www.impacto.com.pe/storage/products/md/173836105911792.webp", 
        categoria: "Memoria RAM", 
        descripcion: "Memoria Ram Kingston Fury 32gb",
        tags: ["ram", "kingston", "fury", "32gb", "ddr4"]
    },
    
    // ========== ALMACENAMIENTO ==========
    { 
        id: 51, 
        nombre: "SSD Kingston 1TB NVMe", 
        precio: 199.00, 
        imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/348036-1200-1200?v=638443042225200000&width=1200&height=1200&aspect=true", 
        categoria: "Almacenamiento", 
        descripcion: "SSD Kingston 1TB NVMe",
        tags: ["ssd", "kingston", "1tb", "nvme", "almacenamiento"]
    },
    { 
        id: 52, 
        nombre: "Disco Duro 2TB Seagate", 
        precio: 289.00, 
        imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/379438-1200-1200?v=638584788458300000&width=1200&height=1200&aspect=true", 
        categoria: "Almacenamiento", 
        descripcion: "Disco Duro 2TB Seagate",
        tags: ["disco", "duro", "seagate", "2tb", "hdd"]
    },
    
    // ========== TARJETAS DE VIDEO ==========
    { 
        id: 53, 
        nombre: "TARJETA DE VIDEO GIGABYTE RTX5050 8GB", 
        precio: 1299.00, 
        imagen: "https://www.infotec.com.pe/102286-large_default/tarjeta-de-video-gigabyte-rtx5050-8gb-low-profile-128-bit-gddr6-gv-n5050oc-8gl-.jpg", 
        categoria: "Tarjetas de Video", 
        descripcion: "TARJETA DE VIDEO GIGABYTE RTX5050 8GB LOW PROFILE",
        tags: ["rtx5050", "gigabyte", "tarjeta video", "gpu", "8gb"]
    },
    { 
        id: 54, 
        nombre: "TARJETA DE VIDEO MSI RTX 5080 16GB", 
        precio: 5899.00, 
        imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/450084-1200-1200?v=638826873036900000&width=1200&height=1200&aspect=true", 
        categoria: "Tarjetas de Video", 
        descripcion: "Tarjeta de video Msi NVIDIA RTX 5080 VENTUS 3X 16GB GDDR7",
        tags: ["rtx5080", "msi", "tarjeta video", "gpu", "16gb"]
    },
    
    // ========== IMPRESORAS ==========
    { 
        id: 55, 
        nombre: "Impresora Epson L3110", 
        precio: 649.90, 
        imagen: "https://http2.mlstatic.com/D_NQ_NP_797276-MLA79650172261_092024-O.webp", 
        categoria: "Impresoras", 
        descripcion: "Impresora multifuncional Epson con sistema continuo",
        tags: ["epson", "impresora", "l3110", "multifuncional", "tinta"]
    },
    { 
        id: 56, 
        nombre: "Impresora Epson L3250", 
        precio: 699.90, 
        imagen: "https://img.pacifiko.com/PROD/resize/1/500x500/NmVhNTk5MW_355.png", 
        categoria: "Impresoras", 
        descripcion: "Impresora WiFi con sistema continuo",
        tags: ["epson", "impresora", "l3250", "wifi", "tinta continua"]
    }
];

// Sugerencias populares
const sugerenciasPopulares = [
    "Laptop Gamer",
    "Monitor",
    "Memoria RAM",
    "SSD",
    "Impresora Epson",
    "PC Gamer",
    "Procesador Intel",
    "Tarjeta de Video",
    "Teclado Gamer",
    "Mouse",
    "Fuente de Poder",
    "Placa Madre"
];

// Categorías para búsqueda
const categorias = [
    "Laptops",
    "PC Gamer",
    "Componentes",
    "Procesadores",
    "Monitores",
    "Placas Madre",
    "Memoria RAM",
    "Almacenamiento",
    "Tarjetas de Video",
    "Impresoras",
    "Refrigeración",
    "Cases",
    "Fuentes de Poder",
    "Periféricos"
];

// Inicialización cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('buscador');
    const sugerenciasBox = document.getElementById('sugerencias');
    
    if (inputBusqueda) {
        // Evento para mostrar sugerencias al escribir
        inputBusqueda.addEventListener('input', function(e) {
            const valor = e.target.value.trim();
            
            if (valor.length > 0) {
                mostrarSugerencias(valor);
            } else {
                ocultarSugerencias();
            }
        });
        
        // Evento para buscar con Enter
        inputBusqueda.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscarProductos();
            }
        });
        
        // Ocultar sugerencias al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (sugerenciasBox && !inputBusqueda.contains(e.target) && !sugerenciasBox.contains(e.target)) {
                ocultarSugerencias();
            }
        });
        
        // Mostrar sugerencias populares al hacer clic en el input
        inputBusqueda.addEventListener('focus', function() {
            if (this.value.length === 0) {
                mostrarSugerenciasPopulares();
            }
        });
    }
    
    // Cargar productos del DOM para búsqueda
    cargarProductosDelDOM();
    
    // Inicializar contador del carrito
    actualizarContadorCarrito();
    
    // Configurar enlace del carrito
    const carritoLink = document.getElementById('carrito-link');
    if (carritoLink) {
        carritoLink.addEventListener('click', function(e) {
            e.preventDefault();
            irAlCarrito();
        });
    }
});

// Cargar productos desde el DOM (de la página principal)
function cargarProductosDelDOM() {
    window.productosDOM = [];
    const productos = document.querySelectorAll('.producto-link');
    
    productos.forEach((producto, index) => {
        const nombre = producto.getAttribute('data-nombre');
        const categoria = producto.getAttribute('data-categoria');
        const precio = parseFloat(producto.getAttribute('data-precio'));
        const imagen = producto.querySelector('img').src;
        
        if (nombre && categoria && precio) {
            window.productosDOM.push({
                id: index + 100,
                nombre: nombre,
                precio: precio,
                imagen: imagen,
                categoria: categoria,
                descripcion: nombre,
                tags: nombre.toLowerCase().split(' ')
            });
        }
    });
}

// Mostrar sugerencias estilo Google
function mostrarSugerencias(termino) {
    const sugerenciasBox = document.getElementById('sugerencias');
    const terminoLower = termino.toLowerCase();
    
    let resultados = [];
    
    // 1. Buscar en productos de la base de datos
    productosDB.forEach(producto => {
        const matchScore = calcularCoincidencia(producto, terminoLower);
        if (matchScore > 0) {
            resultados.push({...producto, score: matchScore});
        }
    });
    
    // 2. Buscar en productos del DOM
    if (window.productosDOM) {
        window.productosDOM.forEach(producto => {
            const matchScore = calcularCoincidencia(producto, terminoLower);
            if (matchScore > 0) {
                resultados.push({...producto, score: matchScore});
            }
        });
    }
    
    // 3. Ordenar por puntaje (coincidencia más relevante primero)
    resultados.sort((a, b) => b.score - a.score);
    
    // 4. Filtrar categorías que coincidan
    const categoriasCoincidentes = categorias.filter(cat => 
        cat.toLowerCase().includes(terminoLower)
    );
    
    // 5. Mostrar resultados
    if (resultados.length > 0 || categoriasCoincidentes.length > 0) {
        let html = '';
        
        // Agregar categorías primero
        categoriasCoincidentes.slice(0, 2).forEach(categoria => {
            html += `
                <div class="sugerencia-item" onclick="buscarSugerencia('${categoria}')">
                    <div class="sugerencia-icono">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="sugerencia-texto">
                        <strong>${categoria}</strong>
                        <span class="sugerencia-categoria">Categoría</span>
                    </div>
                </div>
            `;
        });
        
        // Agregar productos (eliminar duplicados)
        const productosUnicos = [];
        const nombresVistos = new Set();
        
        resultados.forEach(producto => {
            if (!nombresVistos.has(producto.nombre)) {
                nombresVistos.add(producto.nombre);
                productosUnicos.push(producto);
            }
        });
        
        productosUnicos.slice(0, 6 - categoriasCoincidentes.length).forEach(producto => {
            const icono = obtenerIconoCategoria(producto.categoria);
            
            html += `
                <div class="sugerencia-item" onclick="seleccionarSugerencia('${producto.nombre}')">
                    <div class="sugerencia-icono">
                        <i class="${icono}"></i>
                    </div>
                    <div class="sugerencia-texto">
                        <strong>${resaltarCoincidencia(producto.nombre, termino)}</strong>
                        <span class="sugerencia-categoria">${producto.categoria} • S/ ${producto.precio.toFixed(2)}</span>
                    </div>
                </div>
            `;
        });
        
        // Agregar opción de búsqueda completa
        html += `
            <div class="sugerencia-item" onclick="buscarProductos()" style="background-color: #f8f9fa; font-weight: bold; border-top: 1px solid #ddd;">
                <div class="sugerencia-icono">
                    <i class="fas fa-search"></i>
                </div>
                <div class="sugerencia-texto">
                    Buscar "${termino}"
                </div>
                <div style="color: #666; font-size: 12px;">
                    ${resultados.length} resultados
                </div>
            </div>
        `;
        
        sugerenciasBox.innerHTML = html;
        sugerenciasBox.style.display = 'block';
    } else {
        sugerenciasBox.innerHTML = `
            <div class="sugerencia-item" style="color: #666; font-style: italic;">
                <div class="sugerencia-icono">
                    <i class="fas fa-info-circle"></i>
                </div>
                <div class="sugerencia-texto">
                    No se encontraron sugerencias para "${termino}"
                </div>
            </div>
        `;
        sugerenciasBox.style.display = 'block';
    }
}

// Calcular puntaje de coincidencia
function calcularCoincidencia(producto, termino) {
    if (!termino) return 0;
    
    let score = 0;
    
    // Coincidencia exacta en nombre
    if (producto.nombre.toLowerCase() === termino) score += 100;
    
    // Coincidencia en nombre
    if (producto.nombre.toLowerCase().includes(termino)) score += 50;
    
    // Coincidencia en categoría
    if (producto.categoria.toLowerCase().includes(termino)) score += 30;
    
    // Coincidencia en descripción
    if (producto.descripcion.toLowerCase().includes(termino)) score += 20;
    
    // Coincidencia en tags
    if (producto.tags && producto.tags.some(tag => tag.includes(termino))) score += 10;
    
    return score;
}

// Mostrar sugerencias populares
function mostrarSugerenciasPopulares() {
    const sugerenciasBox = document.getElementById('sugerencias');
    
    let html = `
        <div class="sugerencia-item" style="color: #666; font-size: 12px;">
            <div class="sugerencia-icono">
                <i class="fas fa-fire"></i>
            </div>
            <div class="sugerencia-texto">
                Búsquedas populares
            </div>
        </div>
    `;
    
    sugerenciasPopulares.forEach(sugerencia => {
        html += `
            <div class="sugerencia-item" onclick="seleccionarSugerencia('${sugerencia}')">
                <div class="sugerencia-icono">
                    <i class="fas fa-search"></i>
                </div>
                <div class="sugerencia-texto">
                    ${sugerencia}
                </div>
            </div>
        `;
    });
    
    sugerenciasBox.innerHTML = html;
    sugerenciasBox.style.display = 'block';
}

// Obtener icono según categoría
function obtenerIconoCategoria(categoria) {
    const iconos = {
        "Laptops": "fas fa-laptop",
        "PC Gamer": "fas fa-desktop",
        "Componentes": "fas fa-microchip",
        "Procesadores": "fas fa-microchip",
        "Monitores": "fas fa-desktop",
        "Placas Madre": "fas fa-server",
        "Memoria RAM": "fas fa-memory",
        "Almacenamiento": "fas fa-hdd",
        "Tarjetas de Video": "fas fa-video",
        "Impresoras": "fas fa-print",
        "Refrigeración": "fas fa-fan",
        "Cases": "fas fa-box",
        "Fuentes de Poder": "fas fa-bolt",
        "Periféricos": "fas fa-keyboard",
        "default": "fas fa-box"
    };
    
    return iconos[categoria] || iconos.default;
}

// Resaltar coincidencias en el texto
function resaltarCoincidencia(texto, termino) {
    if (!termino) return texto;
    
    const regex = new RegExp(`(${termino})`, 'gi');
    return texto.replace(regex, '<span style="color: #0000ff; font-weight: bold;">$1</span>');
}

// Seleccionar una sugerencia
function seleccionarSugerencia(texto) {
    document.getElementById('buscador').value = texto;
    ocultarSugerencias();
    buscarProductos();
}

// Ocultar sugerencias
function ocultarSugerencias() {
    const sugerenciasBox = document.getElementById('sugerencias');
    if (sugerenciasBox) {
        sugerenciasBox.style.display = 'none';
    }
}

// Función principal de búsqueda
function buscarProductos() {
    const input = document.getElementById('buscador');
    const termino = input.value.trim();
    
    if (termino) {
        // Ocultar sugerencias
        ocultarSugerencias();
        
        // Combinar productos de DB y DOM
        const todosProductos = [...productosDB];
        if (window.productosDOM) {
            todosProductos.push(...window.productosDOM);
        }
        
        // Filtrar productos
        const terminoLower = termino.toLowerCase();
        const resultados = todosProductos.filter(producto => 
            producto.nombre.toLowerCase().includes(terminoLower) ||
            producto.categoria.toLowerCase().includes(terminoLower) ||
            producto.descripcion.toLowerCase().includes(terminoLower) ||
            (producto.tags && producto.tags.some(tag => tag.includes(terminoLower)))
        );
        
        // Mostrar resultados
        mostrarResultadosBusqueda(resultados, termino);
        
        // Ocultar contenido principal
        document.getElementById('contenido-principal').style.display = 'none';
        document.getElementById('resultados-busqueda').style.display = 'block';
        
        // Desplazar a resultados
        document.getElementById('resultados-busqueda').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mostrar resultados de búsqueda
function mostrarResultadosBusqueda(resultados, termino) {
    const contenedorResultados = document.getElementById('productos-resultados');
    const tituloResultados = document.getElementById('titulo-resultados');
    const sinResultados = document.getElementById('sin-resultados');
    
    // Actualizar título
    tituloResultados.innerHTML = `Resultados para "<span style="color: #0000ff;">${termino}</span>" <small style="color: #666; font-size: 0.8em;">(${resultados.length} productos encontrados)</small>`;
    
    if (resultados.length > 0) {
        // Agrupar por categoría
        const productosPorCategoria = {};
        resultados.forEach(producto => {
            if (!productosPorCategoria[producto.categoria]) {
                productosPorCategoria[producto.categoria] = [];
            }
            productosPorCategoria[producto.categoria].push(producto);
        });
        
        // Mostrar productos por categoría
        let html = '';
        
        Object.keys(productosPorCategoria).forEach(categoria => {
            html += `
                <div class="categoria-resultados">
                    <h3 style="color: #0000ff; border-bottom: 2px solid #0000ff; padding-bottom: 5px; margin-top: 30px;">
                        <i class="${obtenerIconoCategoria(categoria)}"></i> ${categoria}
                        <span style="font-size: 0.8em; color: #666;">(${productosPorCategoria[categoria].length} productos)</span>
                    </h3>
                    <div class="grid-productos">
            `;
            
            productosPorCategoria[categoria].forEach(producto => {
                html += `
                    <div class="producto-link">
                        <div class="IMG">
                            <img src="${producto.imagen}" alt="${producto.nombre}">
                            <p>${resaltarCoincidenciaHTML(producto.nombre, termino)}<br><strong>S/ ${producto.precio.toFixed(2)}</strong></p>
                            <p style="font-size: 12px; color: #666; margin: 5px 0;">${producto.descripcion.substring(0, 80)}...</p>
                            <a href="javascript:void(0)" onclick="agregarAlCarritoDesdeBusqueda('${producto.nombre.replace(/'/g, "\\'")}', ${producto.precio}, '${producto.imagen}')" class="btn-agregar">
                                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                            </a>
                        </div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        contenedorResultados.innerHTML = html;
        contenedorResultados.style.display = 'block';
        sinResultados.style.display = 'none';
    } else {
        // Mostrar mensaje de no resultados
        contenedorResultados.innerHTML = '';
        contenedorResultados.style.display = 'none';
        sinResultados.style.display = 'block';
        
        // Generar sugerencias
        const sugerencias = generarSugerencias(termino);
        if (sugerencias.length > 0) {
            const sugerenciasHTML = sugerencias.map(s => 
                `<span class="tag-sugerencia" onclick="buscarSugerencia('${s}')">${s}</span>`
            ).join('');
            
            document.querySelector('.sugerencias-busqueda').innerHTML = `
                <strong>Sugerencias relacionadas:</strong><br>
                ${sugerenciasHTML}
            `;
        }
    }
}

// Función para resaltar coincidencia en HTML
function resaltarCoincidenciaHTML(texto, termino) {
    if (!termino) return texto;
    const regex = new RegExp(`(${termino.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return texto.replace(regex, '<span style="background-color: #fff3cd; color: #856404; padding: 0 2px; border-radius: 2px;">$1</span>');
}

// Generar sugerencias inteligentes
function generarSugerencias(termino) {
    const terminoLower = termino.toLowerCase();
    const sugerencias = new Set();
    
    // Buscar categorías similares
    categorias.forEach(categoria => {
        if (categoria.toLowerCase().includes(terminoLower)) {
            sugerencias.add(categoria);
        }
    });
    
    // Buscar en tags de productos
    productosDB.forEach(producto => {
        producto.tags.forEach(tag => {
            if (tag.includes(terminoLower) || terminoLower.includes(tag)) {
                sugerencias.add(producto.categoria);
                sugerencias.add(tag.charAt(0).toUpperCase() + tag.slice(1));
            }
        });
    });
    
    // Agregar sugerencias populares si no hay suficientes
    if (sugerencias.size < 3) {
        sugerenciasPopulares.forEach(sugerencia => {
            if (sugerencias.size < 5) {
                sugerencias.add(sugerencia);
            }
        });
    }
    
    return Array.from(sugerencias).slice(0, 5);
}

// Ocultar resultados y mostrar contenido principal
function ocultarResultados() {
    document.getElementById('resultados-busqueda').style.display = 'none';
    document.getElementById('contenido-principal').style.display = 'block';
    
    // Limpiar campo de búsqueda
    document.getElementById('buscador').value = '';
    
    // Regresar al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Buscar desde sugerencia
function buscarSugerencia(termino) {
    document.getElementById('buscador').value = termino;
    buscarProductos();
}

// Funciones para agregar al carrito
function agregarAlCarritoDesdeLista(nombre, precio, imagen) {
    agregarAlCarrito(nombre, precio, imagen);
}

function agregarAlCarritoDesdeBusqueda(nombre, precio, imagen) {
    agregarAlCarrito(nombre, precio, imagen);
}

// Función principal para agregar al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    // Obtener carrito actual
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        // Si ya existe, aumentar cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no existe, agregar nuevo producto
        carrito.push({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1,
            fecha: new Date().toISOString()
        });
    }
    
    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Mostrar modal de confirmación
    mostrarModalCarrito(nombre);
    
    // Actualizar contador del carrito
    actualizarContadorCarrito();
}

// Mostrar modal de confirmación
function mostrarModalCarrito(nombreProducto) {
    const modal = document.getElementById('modal-carrito');
    const mensaje = document.getElementById('modal-mensaje');
    
    if (modal && mensaje) {
        mensaje.textContent = `"${nombreProducto}" ha sido agregado a tu carrito.`;
        modal.style.display = 'block';
    }
}

// Cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modal-carrito');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Ir al carrito
function irAlCarrito() {
    window.location.href = 'carrito.html';
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = document.querySelector('.usuarios a[href="#"]');
    
    if (contador && carrito.length > 0) {
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contador.innerHTML = `<i class="fas fa-shopping-cart"></i> Mi carrito (${totalItems})`;
        
        // Actualizar el enlace del carrito
        const carritoLink = document.getElementById('carrito-link');
        if (carritoLink) {
            carritoLink.innerHTML = `<i class="fas fa-shopping-cart"></i> Mi carrito (${totalItems})`;
        }
    }
}

// Inicializar contador al cargar
window.addEventListener('load', function() {
    actualizarContadorCarrito();
});

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modal-carrito');
    if (event.target == modal) {
        cerrarModal();
    }
};

// Guardar historial de búsqueda
function guardarHistorialBusqueda(termino) {
    let historial = JSON.parse(localStorage.getItem('historialBusqueda')) || [];
    
    // Agregar término al inicio (si no existe ya)
    if (!historial.includes(termino.toLowerCase())) {
        historial.unshift(termino.toLowerCase());
        // Mantener solo los últimos 10 términos
        historial = historial.slice(0, 10);
        localStorage.setItem('historialBusqueda', JSON.stringify(historial));
    }
}
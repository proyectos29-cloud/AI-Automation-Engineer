// generator.js - Versión Blindada con Contador en CSS Puro (Sin JavaScript)

function parseMarkdown(text) {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

async function generateListicle(researchData, productUrl) {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I Tried 7 Different 'Comfort' Shoes. Only One Actually Worked.</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;0,700;1,400&display=swap');
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Lora', serif; }

        /* ANIMACIÓN DE CONTADOR EN CSS PURO (Resistente a bloqueos de Script) */
        @keyframes countdown-sec {
            0% { content: "59"; } 1.66% { content: "58"; } 3.33% { content: "57"; } 5% { content: "56"; }
            6.66% { content: "55"; } 8.33% { content: "54"; } 10% { content: "53"; } 11.66% { content: "52"; }
            13.33% { content: "51"; } 15% { content: "50"; } 16.66% { content: "49"; } 18.33% { content: "48"; }
            20% { content: "47"; } 21.66% { content: "46"; } 23.33% { content: "45"; } 25% { content: "44"; }
            26.66% { content: "43"; } 28.33% { content: "42"; } 30% { content: "41"; } 31.66% { content: "40"; }
            33.33% { content: "39"; } 35% { content: "38"; } 36.66% { content: "37"; } 38.33% { content: "36"; }
            40% { content: "35"; } 41.66% { content: "34"; } 43.33% { content: "33"; } 45% { content: "32"; }
            46.66% { content: "31"; } 48.33% { content: "30"; } 50% { content: "29"; } 51.66% { content: "28"; }
            53.33% { content: "27"; } 55% { content: "26"; } 56.66% { content: "25"; } 58.33% { content: "24"; }
            60% { content: "23"; } 61.66% { content: "22"; } 63.33% { content: "21"; } 65% { content: "20"; }
            66.66% { content: "19"; } 68.33% { content: "18"; } 70% { content: "17"; } 71.66% { content: "16"; }
            73.33% { content: "15"; } 75% { content: "14"; } 76.66% { content: "13"; } 78.33% { content: "12"; }
            80% { content: "11"; } 81.66% { content: "10"; } 83.33% { content: "09"; } 85% { content: "08"; }
            86.66% { content: "07"; } 88.33% { content: "06"; } 90% { content: "05"; } 91.66% { content: "04"; }
            93.33% { content: "03"; } 95% { content: "02"; } 96.66% { content: "01"; } 100% { content: "00"; }
        }

        @keyframes countdown-min {
            0% { content: "44"; } 10% { content: "43"; } 20% { content: "42"; } 30% { content: "41"; }
            40% { content: "40"; } 50% { content: "39"; } 60% { content: "38"; } 70% { content: "37"; }
            80% { content: "36"; } 90% { content: "35"; } 100% { content: "34"; }
        }

        .css-sec::after { content: "59"; animation: countdown-sec 60s infinite linear; }
        .css-min::after { content: "45"; animation: countdown-min 600s infinite linear; }
    </style>
</head>
<body class="bg-[#f2f2f2] text-[#222222] antialiased">

    <!-- BARRA SUPERIOR DE ANUNCIOS -->
    <div class="bg-[#1b281b] text-white text-[9px] uppercase tracking-widest py-2 text-center font-semibold border-b border-white/10">
        SUMMER SALE • UP TO 57% OFF • FREE SHIPPING 📦
    </div>

    <!-- LOGO HEADER -->
    <header class="bg-[#2d3e2d] text-white text-center py-3.5 font-black tracking-widest text-sm uppercase">
        FOOT-INSIDER
    </header>

    <!-- CONTENEDOR AJUSTADO -->
    <main class="max-w-lg mx-auto bg-white px-5 sm:px-6 py-8 shadow-sm">
        
        <!-- TITULAR PRINCIPAL -->
        <h1 class="text-[26px] font-bold leading-tight text-gray-900 tracking-tight mb-2">
            I Tried 7 Different 'Comfort' Shoes. <span class="text-[#2d3e2d] font-semibold">Only One Actually Worked.</span>
        </h1>
        
        <p class="text-[12px] text-gray-400 mb-5 tracking-wide">
            Definitively saving you the time and money I wasted.
        </p>

        <!-- INTRO TEXTS -->
        <div class="text-[13px] text-gray-700 leading-relaxed space-y-4 mb-5">
            <p>Over the past 2 weeks, I've tried $150 Brooks running shoes, <strong>$110 custom orthotics</strong>, $130 Nikes from sneakers stores, those ugly Skechers my mom recommended, two different "orthotics" brands, some $45 Amazon shoes with 4.5 star reviews, and finally, these botanical shoes everyone kept talking about.</p>
            <p class="text-[12px] text-gray-500"><span class="font-bold">Disclosure:</span> <strong>Chronicles</strong>. Read the full review below.</p>
        </div>

        <!-- NOTA ALERTA VERDE CLARO -->
        <div class="bg-[#eef5ee] border-l-4 border-[#2d3e2d] p-3 text-[12px] text-gray-700 font-medium mb-6">
            <strong>Note:</strong> Read this BEFORE you struggle with another pair of shoes!
        </div>

        <!-- TWITTER / X AUTHOR CARD -->
        <div class="border border-gray-100 rounded-xl p-3 flex items-center justify-between bg-white shadow-sm mb-8">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Author" class="w-full h-full object-cover">
                </div>
                <div>
                    <div class="flex items-center gap-1">
                        <span class="text-xs font-bold text-gray-900">Clarissa Jackson</span>
                        <span class="text-[10px] text-blue-500">✓</span>
                    </div>
                    <span class="text-[11px] text-gray-400 block font-light">Verified Foot Specialist</span>
                </div>
            </div>
            <button class="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white text-[11px] font-bold px-4 py-1.5 rounded-full transition-all tracking-wide self-center shadow-sm">
                Follow
            </button>
        </div>

        <!-- LISTA DE ITEMS (1 al 5) -->
        
        <!-- Item 1 (Con video de producto) -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <video 
                    src="https://cdn.shopify.com/videos/c/o/v/5bbd7760d956499f883cc37bc2675c79.mp4" 
                    class="w-full h-full object-cover" 
                    autoplay 
                    loop 
                    muted 
                    playsinline>
                </video>
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">1. I Could Actually Put Them On</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed mb-2.5">
                    This sounds small, but bending dynamics into shoes was agony for my back. These? Just slid in. <strong>No bending, no loose, no struggle.</strong>
                </p>
                <p class="text-[11px] text-amber-700 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                    👉 See the comparison I made here
                </p>
            </div>
        </div>

        <!-- Item 2 -->
        <!-- Item 2 (Con video de producto) -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <video 
                    src="https://cdn.shopify.com/videos/c/o/v/f46284f8498f4afd84c284777547ee77.mp4" 
                    class="w-full h-full object-cover" 
                    autoplay 
                    loop 
                    muted 
                    playsinline>
                </video>
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">2. My Balance Felt Different</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    I used to feel wobbly on wet floors or uneven sidewalks. Truly nervous feeling when you step on a slippery surface. These have a <strong>real slip resistant</strong> that actually works.
                </p>
            </div>
        </div>

        <!-- Item 3 -->
        <!-- Item 3 (Con video de producto) -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <video 
                    src="https://cdn.shopify.com/videos/c/o/v/c42f289bbb134fcbbaff3897e8d562a9.mp4" 
                    class="w-full h-full object-cover" 
                    autoplay 
                    loop 
                    muted 
                    playsinline>
                </video>
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">3. Comfortable All Day Without Foot Pain</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    Usually, by evening foot pain is annoying. In standard sneakers, I'd been on my feet for hours. <strong>No pain, no fatigue.</strong>
                </p>
            </div>
        </div>

        <!-- Item 4 -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <video 
                    src="https://cdn.shopify.com/videos/c/o/v/8febc68ad7164ff8ada5b87457987a4d.mp4" 
                    class="w-full h-full object-cover" 
                    autoplay 
                    loop 
                    muted 
                    playsinline>
                </video>
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">4. Relief for Back Pain, Stiff Joints & Foot Pain</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    The enhanced arch support features re-aligning and stability. Body structure absorbs impact eliminating shock before it reaches your <strong>knees, hips, and lower back</strong>.
                </p>
            </div>
        </div>

        <!-- Item 5 -->
        <!-- Item 5 (Con video de producto) -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <video 
                    src="https://cdn.shopify.com/videos/c/o/v/517a7006223546a9a6727b668b56769e.mp4" 
                    class="w-full h-full object-cover" 
                    autoplay 
                    loop 
                    muted 
                    playsinline>
                </video>
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">5. My Bunions Finally Had Room</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    Tired of squeezing your feet into tight, narrow shoes? These features a <strong>wide toe box</strong> that lets your toes spread naturally.
                </p>
            </div>
        </div>

        <!-- BANNER DE PRODUCTO INTERMEDIO (Urgencia Pura en CSS) -->
        <div class="my-10 border border-gray-200 rounded-xl overflow-hidden bg-[#fcfcfc] relative shadow-sm">
            <div class="bg-purple-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 absolute top-0 left-0 rounded-br">
                SUMMER SALE
            </div>
            
            <div class="p-5 pt-8 flex flex-col sm:flex-row items-center gap-5">
                <div class="w-32 h-32 bg-white p-1 rounded border border-gray-100 flex items-center justify-center">
                    <img src="https://offers.hike-footwear.com/wf-assets/cdn/683f59f83bf92662dad61203/6944373e1650e3575da8104d_6894897cb47d40036c6424d4_1%201.avif" alt="Offer" class="object-contain w-full h-full">
                </div>
                
                <div class="flex-1 text-center sm:text-left">
                    <span class="text-[10px] font-bold text-gray-400 block tracking-wide">📦 OFF MORE, SAVE MORE</span>
                    <h3 class="text-lg font-black text-gray-900 mt-0.5 leading-tight">
                        UP TO <span class="text-red-600">57% OFF</span> FOR A LIMITED TIME ONLY!
                    </h3>

                    <!-- CONTADOR VISUAL POR HOJA DE ESTILOS -->
                    <div class="mt-3 mb-1 flex items-center justify-center sm:justify-start gap-1">
                        <span class="text-[11px] text-gray-500 font-semibold mr-1">⏱️ Expires in:</span>
                        <div class="flex gap-1 text-center font-bold text-[12px]">
                            <span class="bg-gray-800 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px]">00</span>
                            <span class="text-gray-800">:</span>
                            <span class="bg-gray-800 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px]">01</span>
                            <span class="text-gray-800">:</span>
                            <span class="bg-gray-800 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px] css-min"></span>
                            <span class="text-gray-800">:</span>
                            <span class="bg-red-600 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px] css-sec"></span>
                        </div>
                    </div>
                    
                    <a href="${productUrl}" target="_blank" class="mt-3 inline-flex items-center justify-center w-full bg-[#4f7743] hover:bg-[#3d5d34] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors shadow gap-1">
                        TRY THEM RISK-FREE →
                    </a>
                    
                    <div class="mt-2.5 flex items-center justify-center sm:justify-start gap-2.5 text-[10px] text-gray-400 font-medium">
                        <span>🛡️ 90-Day Risk-Free Trial</span>
                        <span>•</span>
                        <span>🚚 Free Shipping</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- LISTA DE ITEMS (6 al 10) -->

        <!-- Item 6 (Con imagen de producto actualizada) -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <img src="https://offers.hike-footwear.com/wf-assets/cdn/683f59f83bf92662dad61203/6944397d754a5005a106e3d1_2C%20-%20Close-up%20of%20feet-p-1080.webp" alt="Product 6" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">6. That Barefoot Feeling (But Protected)</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    I always loved barefoot walking, was healthy but didn't want to destroy my feet on concrete. These give you that <strong>natural barefoot feeling</strong> with perfect protection.
                </p>
            </div>
        </div>

        <!-- Item 7 -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <img src="https://offers.hike-footwear.com/wf-assets/cdn/683f59f83bf92662dad61203/6944397f8b3ba41865d1c590_4A%20-%20Tying%20Shoes%20(1)-p-1600.webp" alt="Product 7" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">7. Easy to Clean</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    No more gentle hand-wash cycles or specialized cleaners. Mud, grass, dust? Toss them in the <strong>washing machine</strong> and they look like brand new.
                </p>
            </div>
        </div>

        <!-- Item 8 (Con video de producto) -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <video 
                    src="https://cdn.shopify.com/videos/c/o/v/87dbc7aa723d4cfa9cf378f5cd49b258.mp4" 
                    class="w-full h-full object-cover" 
                    autoplay 
                    loop 
                    muted 
                    playsinline>
                </video>
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">8. Breathable for All-Day Freshness</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    Sweaty feet were my constant companion until now. The <strong>breathable material</strong> actively vents moisture, keeping your feet cool and completely odor-free.
                </p>
            </div>
        </div>

        <!-- Item 9 -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <img src="https://offers.hike-footwear.com/wf-assets/cdn/683f59f83bf92662dad61203/69443c3243d61ec1cce0d7f1_PDP_Podiatrist_Recommended_Marta_-_HF_Cloud.webp" alt="Product 9" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">9. Recommended by Podiatrists</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    Professional foot experts officially recommend these for people dealing with ongoing discomfort, providing orthopedic benefits without looking like clinical shoes.
                </p>
            </div>
        </div>

        <!-- Item 10 -->
        <div class="mb-8 flex flex-col sm:flex-row gap-4 items-start">
            <div class="w-full sm:w-40 h-40 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                <img src="https://offers.hike-footwear.com/wf-assets/cdn/683f59f83bf92662dad61203/694443c1d55c2f4e4b83aaba_C18727BB-D484-438F-B5C9-DB6D09237297-p-1600.webp" alt="Product 10" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <h2 class="text-[17px] font-bold text-gray-900 mb-1.5 leading-tight">10. Best Value for What Actually Works</h2>
                <p class="text-[13px] text-gray-600 leading-relaxed">
                    Instead of spending hundreds on endless alternatives, these offer premium design at a fraction of the cost. The only ones that actually delivered on their promise.
                </p>
            </div>
        </div>

        <!-- BANNER DE PRODUCTO FINAL (Urgencia Pura en CSS) -->
        <div class="my-10 border border-gray-200 rounded-xl overflow-hidden bg-[#fcfcfc] relative shadow-sm">
            <div class="bg-purple-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 absolute top-0 left-0 rounded-br">
                SUMMER SALE
            </div>
            
            <div class="p-5 pt-8 flex flex-col sm:flex-row items-center gap-5">
                <div class="w-32 h-32 bg-white p-1 rounded border border-gray-100 flex items-center justify-center">
                    <img src="https://offers.hike-footwear.com/wf-assets/cdn/683f59f83bf92662dad61203/6944373e1650e3575da8104d_6894897cb47d40036c6424d4_1%201.avif" alt="Offer" class="object-contain w-full h-full">
                </div>
                
                <div class="flex-1 text-center sm:text-left">
                    <span class="text-[10px] font-bold text-gray-400 block tracking-wide">📦 OFF MORE, SAVE MORE</span>
                    <h3 class="text-lg font-black text-gray-900 mt-0.5 leading-tight">
                        UP TO <span class="text-red-600">57% OFF</span> FOR A LIMITED TIME ONLY!
                    </h3>

                    <!-- El resto del bloque (Contador y Botón) se mantiene igual -->

                    <!-- CONTADOR VISUAL POR HOJA DE ESTILOS -->
                    <div class="mt-3 mb-1 flex items-center justify-center sm:justify-start gap-1">
                        <span class="text-[11px] text-gray-500 font-semibold mr-1">⏱️ Expires in:</span>
                        <div class="flex gap-1 text-center font-bold text-[12px]">
                            <span class="bg-gray-800 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px]">00</span>
                            <span class="text-gray-800">:</span>
                            <span class="bg-gray-800 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px]">01</span>
                            <span class="text-gray-800">:</span>
                            <span class="bg-gray-800 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px]">45</span>
                            <span class="text-gray-800">:</span>
                            <span class="bg-red-600 text-white px-1.5 py-0.5 rounded shadow-sm min-w-[22px] css-sec"></span>
                        </div>
                    </div>
                    
                    <a href="${productUrl}" target="_blank" class="mt-3 inline-flex items-center justify-center w-full bg-[#4f7743] hover:bg-[#3d5d34] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors shadow gap-1">
                        TRY THEM RISK-FREE →
                    </a>
                    
                    <div class="mt-2.5 flex items-center justify-center sm:justify-start gap-2.5 text-[10px] text-gray-400 font-medium">
                        <span>🛡️ 90-Day Risk-Free Trial</span>
                        <span>•</span>
                        <span>🚚 Free Shipping</span>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <!-- FOOTER -->
    <footer class="text-gray-400 text-center text-[11px] py-6 bg-[#f2f2f2]">
        &copy; ${new Date().getFullYear()} Foot-Insider. All rights reserved.
    </footer>

</body>
</html>
    `;
}

module.exports = { generateListicle };
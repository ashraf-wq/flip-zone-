// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Translation toggle
const translateBtn = document.getElementById('translate-btn');
let isArabic = false;
translateBtn.addEventListener('click', () => {
    isArabic = !isArabic;
    document.body.classList.toggle('rtl', isArabic);
    document.body.classList.toggle('ltr', !isArabic);
    // Toggle text
    const elements = {
        'brand-name': ['FlipZone', 'فليب زون'],
        'nav-home': ['Home', 'الرئيسية'],
        'nav-about': ['About Us', 'من نحن'],
        'nav-flip-rooms': ['Flip Rooms', 'غرف الإنقلاب'],
        'nav-anti-gravity': ['Anti-Gravity Room', 'غرفة مكافحة الجاذبية'],
        'nav-flip-cafe': ['Flip Café', 'مقهى الإنقلاب'],
        'nav-vr': ['VR Experience', 'تجربة الواقع الافتراضي'],
        'nav-pricing': ['Pricing', 'التسعير'],
        'hero-title': ['Welcome to FlipZone', 'مرحبا بكم في فليب زون'],
        'hero-subtitle': ['Experience the upside-down museum where gravity disappears!', 'استمتعوا بمتحف مقلوب حيث تختفي الجاذبية!'],
        'learn-more': ['Learn More', 'اعرف المزيد'],
        'about-title': ['About Us', 'من نحن'],
        'about-text': ['FlipZone is a revolutionary museum where the laws of physics are defied. Step into rooms where gravity vanishes, enjoy anti-gravity thrills, dine in a café that defies orientation, and immerse in VR worlds. Our mission is to turn your perception of reality upside down!', 'فليب زون متحف ثوري حيث يتم تحدي قوانين الفيزياء. ادخلوا غرفا حيث تختفي الجاذبية، استمتعوا بإثارة مكافحة الجاذبية، تناولوا الطعام في مقهى يتحدى التوجه، وغوصوا في عوالم الواقع الافتراضي. مهمتنا هي قلب إدراككم للواقع رأسا على عقب!'],
        'flip-rooms-title': ['Flip Rooms', 'غرف الإنقلاب'],
        'flip-rooms-text': ['Explore interactive rooms where everything is flipped. Walk on ceilings and defy gravity in our signature exhibits.', 'استكشفوا غرفا تفاعلية حيث يتم قلب كل شيء. امشوا على السقوف وتحدوا الجاذبية في معروضاتنا المميزة.'],
        'anti-gravity-title': ['Anti-Gravity Room', 'غرفة مكافحة الجاذبية'],
        'anti-gravity-text': ['Float freely in our anti-gravity chamber. Experience zero-G sensations without leaving Earth.', 'طفوا بحرية في غرفتنا المضادة للجاذبية. اختبروا إحساس الصفر جي دون مغادرة الأرض.'],
        'flip-cafe-title': ['Flip Café', 'مقهى الإنقلاب'],
        'flip-cafe-text': ['Enjoy upside-down dining with gravity-defying food and drinks. A unique culinary experience!', 'استمتعوا بتناول الطعام مقلوبا مع أطعمة ومشروبات تتحدى الجاذبية. تجربة طهي فريدة!'],
        'vr-title': ['VR Experience', 'تجربة الواقع الافتراضي'],
        'vr-text': ['Immerse yourself in virtual realities that blend with our museum\'s theme. Explore infinite possibilities.', 'غوصوا في واقع افتراضي يندمج مع موضوع متحفنا. استكشفوا إمكانيات لا حصر لها.'],
        'pricing-title': ['Pricing', 'التسعير'],
        'basic-title': ['Basic Entry', 'الدخول الأساسي'],
        'basic-text': ['$20 - Access to Flip Rooms and Anti-Gravity Room.', '20 دولار - الوصول إلى غرف الإنقلاب وغرفة مكافحة الجاذبية.'],
        'premium-title': ['Premium', 'المميز'],
        'premium-text': ['$35 - Includes VR Experience and Flip Café.', '35 دولار - يشمل تجربة الواقع الافتراضي ومقهى الإنقلاب.'],
        'vip-title': ['VIP', 'كبار الشخصيات'],
        'vip-text': ['$50 - All areas with priority access.', '50 دولار - جميع المناطق مع الوصول المسبق.'],
        'footer-text': ['© 2023 FlipZone. All rights reserved.', '© 2023 فليب زون. جميع الحقوق محفوظة.'],
        'book-now-btn': ['<i class="fab fa-whatsapp"></i> Book Now', '<i class="fab fa-whatsapp"></i> احجز الآن']
    };
    for (const [id, texts] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = isArabic ? texts[1] : texts[0];
    }
});

// Animation on scroll for section titles
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});
document.querySelectorAll('.section h2').forEach(h2 => observer.observe(h2));

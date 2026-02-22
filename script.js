// Initialize Lucide Icons
lucide.createIcons();

// WhatsApp Business Number (Replace with yours)
const myWhatsAppNumber = "917300659187"; 

// Booking Form Logic (Only runs if the form is present on the page)
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const date = document.getElementById('date').value;
        const email = document.getElementById('email').value || "Not provided";

        const message = `Namaste Kedar Jan Camps! 🙏\n\nI would like to book a stay.\n\n👤 *Yatri Name:* ${name}\n📅 *Arrival Date:* ${date}\n📞 *Mobile:* ${mobile}\n📧 *Email:* ${email}\n\nPlease confirm availability.`;

        const url = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}
// Shared product data for the entire store.
// In a real application, this would be fetched from a server/API.
const allProducts = [
    { id: 'kc01', name: 'Anime Keychain', price: 149, category: 'Keychains', image: 'anime.jpeg', description: 'A beautiful handmade macrame keychain, perfect for your keys or as a bag charm.', reviews: [{ rating: 5, author: 'Jane D.', comment: 'Absolutely beautiful! Great quality.' }, { rating: 4, author: 'John S.', comment: 'Very nice, but a bit smaller than I expected.' }], isNew: true },
    { id: 'kc02', name: 'Himawari Nohari Cartoon keychain', price: 149, category: 'Keychains', image: '1.jpg', description: 'A unique keychain made with colored resin and glitter. Each piece is one-of-a-kind.', reviews: [] },
    { id: 'kc03', name: 'Couple Keychain', price: 199, category: 'Keychains', image: 'couple.jpg', description: 'A custom keychain with your initial. Made from high-quality acrylic.', reviews: [] },
    { id: 'kc04', name: 'Friendship Keychain', price: 119, category: 'Keychains', image: 'friends.jpeg', description: 'A set of two matching keychains, perfect for best friends.', reviews: [] },
    { id: 'kc05', name: 'Evil Eye Keychain', price: 149, category: 'Keychains', image: 'evil-eye.jpeg', description: 'A stylish evil eye keychain to ward off negativity.', reviews: [] },
    { id: 'kc06', name: 'Macrame Keychain', price: 299, category: 'Keychains', image: 'images.jpeg', description: 'Elegant handmade macrame keychain with a leaf design.', reviews: [] },

    { id: 'wd01', name: 'Mandala Wall Art 30 cm ', price: 499, category: 'Wall Decor', image: 'shiv.jpg', description: 'An intricate mandala wall hanging, laser-cut from wood. Adds a spiritual touch to any room.', reviews: [{ rating: 5, author: 'Emily R.', comment: 'Stunning piece, it completely transformed my living room!' }], isNew: true },
    { id: 'wd02', name: 'Abstract Canvas Print', price: 499, category: 'Wall Decor', image: 'circular.jpeg', description: 'A vibrant abstract canvas print to brighten up your living space. Available in multiple sizes.', reviews: [] },
    { id: 'wd03', name: 'Mandala Wall Art 45 cm', price: 699, category: 'Wall Decor', image: 'circular.webp', description: 'A handmade dream catcher with feathers and beads. Perfect for a bohemian-style bedroom.', reviews: [] },
    { id: 'wd04', name: 'Modern wall art', price: 749, category: 'Wall Decor', image: 'hirn.jpeg', description: 'Modern geometric wall art made from reclaimed wood.', reviews: [] },
    { id: 'wd05', name: 'Resin Ocean Clock', price: 499, category: 'Wall Decor', image: 'shopping.webp', description: 'A beautiful wall clock with a resin art ocean wave design.', reviews: [] },
    { id: 'wd06', name: 'Photo Hanging Display', price: 399, category: 'Wall Decor', image: 'led.webp', description: 'A creative way to display your favorite photos with clips and string lights.', reviews: [] },

    { id: 'la01', name: 'Circular Lippan Mirror', price: 799, category: 'Lippan Art', image: 'download.jpeg', description: 'Traditional Lippan Kaam (mud and mirror work) from Kutch, Gujarat. A stunning piece of cultural art.', reviews: [], isNew: true },
    { id: 'la02', name: 'Lippan Art Nameplate', price: 499, category: 'Lippan Art', image: 'shopping1.webp', description: 'A custom-made nameplate for your home featuring beautiful lippan art.', reviews: [] },
    { id: 'la03', name: 'Square Wall Panel', price: 799, category: 'Lippan Art', image: 'squarewallpanel.webp', description: 'An elegant square wall panel with detailed mud and mirror work. A true statement piece.', reviews: [] },
    { id: 'la04', name: 'Peacock Lippan Art', price: 419, category: 'Lippan Art', image: 'peacock.webp', description: 'A majestic peacock design rendered in traditional Lippan art.', reviews: [] },
    { id: 'la05', name: 'Set of 3 Mini Panels', price: 599, category: 'Lippan Art', image: '3panel.webp', description: 'A set of three small, complementary Lippan art panels to create a gallery wall.', reviews: [] },
    { id: 'la06', name: 'Ganesha Lippan Art', price: 449, category: 'Lippan Art', image: 'ganesh.webp', description: 'An auspicious Ganesha design to bring good fortune to your home.', reviews: [] },
];

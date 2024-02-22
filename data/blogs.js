import Hero1 from "@/public/images/Hero/hero11.jpg";
import Hero2 from "@/public/images/Hero/hero9.jpg";
import Hero3 from "@/public/images/Hero/hero10.jpg";
import Author1 from "@/public/images/profile/profile5.jpg";
import Author2 from "@/public/images/profile/profile3.jpg";
import Author3 from "@/public/images/profile/profile2.jpg";

const posts = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: "#",
        img: Hero1,
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            imageUrl: Author1,
        },
    },
    {
        id: 2,
        title: "How to use search engine optimization to drive sales",
        href: "#",
        img: Hero2,
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Lindsay Walton",
            role: "Front-end Developer",
            href: "#",
            imageUrl: Author2,
        },
    },
    {
        id: 3,
        title: "Improve your customer experience",
        href: "#",
        img: Hero3,
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Cathy Mueller",
            role: "Director of Product",
            href: "#",
            imageUrl: Author3,
        },
    },
    // More posts...
];

export default posts
export default function About ({ image, about }) {
    return (
        <aside className="about">
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
} 
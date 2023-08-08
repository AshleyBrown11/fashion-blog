export default function Nav ({ links }) {
    return (
        <nav aria-label="Main Navigation" role="navigation">
            <ul class="nav-bar header-nav">
                {links.map(link => <li><a href="">{link}</a></li>)}
            </ul>
        </nav>
    )
}
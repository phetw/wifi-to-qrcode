import './index.css'

const Card = ({ title = '', children }) => (
	<article>
		<h1>{title}</h1>
		<section>{children}</section>
	</article>
)

export default Card

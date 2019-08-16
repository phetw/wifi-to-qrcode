import './index.css';

export const Card = ({ title = '', children }) => (
	<article>
		<h1>{title}</h1>
		<section>{children}</section>
	</article>
);

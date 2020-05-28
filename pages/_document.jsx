import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (<Html>
				<Head />
				<body className="pl-4">
					<Main />
					<NextScript />
				</body>
			</Html>);
    }
}
//# sourceMappingURL=_document.jsx.map
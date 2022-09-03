import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { db } from '../firebase';

import styles from '../styles/Home.module.css';

export default function Home() {
	const router = useRouter();
	const id = router.query.id;
	const [article, setArticle] = useState([]);

	useEffect(() => {
		(async () => {
			if (!id) {
				return;
			}
			const docRef = doc(db, 'articles', id);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setArticle({
					id: docSnap.id,
					title: docSnap.data().title,
					description: docSnap.data().description,
				});
				console.log('Document data:', docSnap.data());
			}
		})();
	}, [id]);

	return (
		<div className={styles.container}>
			<Head>
				<title>{article.title} | firebase-nextjs-dialy</title>
				<meta name="description" content="{article.description}" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>{article.title}</h1>
				<p>{article.description}</p>
			</main>
		</div>
	);
}

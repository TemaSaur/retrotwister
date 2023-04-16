import OtherPage from "@/components/OtherPage";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const KThxBye = () => {
	return <OtherPage>
		<Image className="pageTitle" src='/bye.svg' alt='Легкой работы' width={169} height={43}></Image>
		<Image className="kot" src='/kotsmetana.jpeg' alt='кот со сметаной' width={400} height={400}></Image>
		<Link href='/'>
			<Button colored style={{marginTop: 25}}>На главную</Button>
		</Link>
	</OtherPage>
}

export default KThxBye;
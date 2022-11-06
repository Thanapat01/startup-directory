import Image from "next/image";
import { useRouter } from "next/router";

export default function StartupItem(props) {

    let data = props.data;

    const router = useRouter()

    function showDetailHandler() {
        if (typeof data.id != "undefined") {
            router.push('/startup/' + data.id)
        }
    }

    return (
        <tbody key={data.id}>
            <tr>
                <td className="bg-base-200">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-12 h-12 ring rounded">
                                <Image src={data.logo} layout="fill" objectFit="contain"></Image>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{data.name}</div>
                            <div className="text-sm max-w-lg break-normal whitespace-normal">{data.about}</div>
                        </div>
                    </div>
                </td>
                <td className="bg-base-200">{data.industry}</td>
                <td className="bg-base-200">{data.stage}</td>
                <th className="bg-base-200">
                    <button className="btn btn-primary btn-xs" onClick={showDetailHandler}>details</button>
                </th>
            </tr>
        </tbody>

    )
}
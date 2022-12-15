import { isBrowser } from "@shopify/hydrogen";
import { Suspense } from "react";
import {Animation } from "../components/Animation.client";

export default function Home() {


    return <Suspense><Animation/></Suspense>

}

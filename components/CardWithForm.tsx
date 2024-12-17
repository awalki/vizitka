"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CoinsIcon } from "lucide-react";
import Image from "next/image";

export default function CardWithForm() {
  const [tips, setTip] = React.useState(0);

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <div className="flex flex-row">
          <Avatar>
            <AvatarImage src="https://github.com/awalki.png" />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <CardTitle className="px-4 content-center font-montserrat text-xl">
            je3ns - Let's start Miracle 🥝
          </CardTitle>
        </div>
        <CardDescription className="text-md font-manrope">
          <code>$ je3ns@miracle: echo "Hello there!"</code>
          <div className="py-2">
            <span className="font-montserrat">Taps counter -</span> 👆{" "}
            <span className="bg-green-400 text-black px-4 rounded-md">
              {tips}
            </span>
          </div>
          <iframe
            style={{ borderRadius: "15px" }}
            src="https://open.spotify.com/embed/track/74tLlkN3rgVzRqQJgPfink?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="items-center gap-4">
          <ul className="flex gap-3">
            <li>
              <a href="https://github.com/awalki">
                <Image
                  width={36}
                  height={36}
                  src="https://skillicons.dev/icons?i=github"
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/SSGbDUB4jW">
                <Image
                  width={36}
                  height={36}
                  src="https://skillicons.dev/icons?i=discord"
                  alt="discord"
                />
              </a>
            </li>
            <li>
              <a href="https://t.me/despairovka">
                <Image
                  width={36}
                  height={36}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"
                  alt="telegram"
                />
              </a>
            </li>
            <li className="ml-auto">
              <Button
                variant="secondary"
                className="bg-green-400 text-black hover:bg-green-500 w-32 font-montserrat"
                onClick={() => setTip(tips + 1)}
              >
                <CoinsIcon /> TAP
              </Button>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

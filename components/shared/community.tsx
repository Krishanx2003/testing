/**
 * v0 by Vercel.
 * @see https://v0.dev/t/n8L7PLRC5M1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white">
      <nav className="bg-[#e0e0e0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                alt="Logo"
                className="h-8 w-8"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="ml-3 text-lg font-semibold">Lightning AI</span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a className="text-gray-500 hover:text-gray-900" href="#">
                Studios
              </a>
              <a className="text-gray-500 hover:text-gray-900" href="#">
                Docs
              </a>
              <a className="text-gray-500 hover:text-gray-900" href="#">
                Releases
              </a>
              <a className="text-gray-500 hover:text-gray-900" href="#">
                Community
              </a>
              <div className="relative">
                <Button className="relative z-10" variant="ghost">
                  Products
                </Button>
                <div className="absolute z-0 top-full hidden group-hover:block" />
              </div>
              <div className="relative">
                <Button className="relative z-10" variant="ghost">
                  Solutions
                </Button>
                <div className="absolute z-0 top-full hidden group-hover:block" />
              </div>
              <a className="text-gray-500 hover:text-gray-900" href="#">
                About
              </a>
              <a className="text-gray-500 hover:text-gray-900" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-[#f4f4f4] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">About Lightning</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="rounded-lg h-96">
            <img alt="Office" className="object-cover h-full w-full rounded-lg" height="384" src="/placeholder.svg" />
          </div>
          <div className="mt-6 text-gray-600">
            <p className="mb-4">
              Lightning AI is the company behind PyTorch Lightning, the deep learning framework for training, finetuning
              and serving AI models (80+ million downloads).
            </p>
            <p className="mb-4">
              PyTorch Lightning started in 2015 by Lightning founder William Falcon while working on computational
              neuroscience research at Columbia University scaling Generative Adversarial Networks and Autoencoders in
              the context of neural decoding working under Liam Paninski. He open sourced it in 2019 while pursuing a
              PhD in self-supervised learning (SSL) at NYU and Facebook AI Research (FAIR) supervised by Kyunghyun Cho
              and Yann Lecun. SSL techniques are at the heart of models like Chat GPT (next word prediction).
            </p>
            <p className="mb-4">
              In 2019 PyTorch Lightning started to be used to train huge models on 1024+ GPUs inside Facebook AI. Today,
              it’s used by over 10,000 companies and 1+ million developers to train, finetune and deploy the world’s
              largest models.
            </p>
            <p className="mb-4">
              Lightning AI started in 2020 as a platform to train models on the cloud across 1000s of GPUs. Today, the
              platform has evolved to a fully end-to-end platform covering everything from distributed data processing,
              training, finetuning foundation models, to serving and deploying AI apps.
            </p>
            <p className="mb-4">
              Lightning Studios expand on PyTorch Lightning’s core ethos of “You do the science, we do the engineering”
              by delivering the world’s most intuitive, easy to use, fastest platform for working on AI. From
              prototyping research ideas to deploying foundation models.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}


"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ResponsiveScatterPlot } from "@nivo/scatterplot"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { ModeToggle } from "./mode"

export function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <div className="flex items-center space-x-4">
          <img alt="FlowingData Logo" className="h-8" src="/placeholder.svg" />
          <nav className="hidden md:flex space-x-4">
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              Membership
            </Link>
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              Courses
            </Link>
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              Tutorials
            </Link>
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              Projects
            </Link>
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              Newsletter
            </Link>
          </nav>
        </div>
        <div className="space-x-4">
          <ModeToggle />
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            Log in
          </Link>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">Race and Occupation</h1>
            <DotChart className="w-full h-[500px]" />
          </div>
          <aside>
            <Card className="mb-8">
              <CardContent>
                <p>Become a member. Support an independent site. Make great charts.</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="default">See what you get</Button>
              </CardFooter>
            </Card>
            <div>
              <h2 className="text-xl font-semibold mb-4">Recently for Members</h2>
              <ul className="space-y-4">
                <li>
                  <Link className="text-blue-600 hover:underline" href="#">
                    February 15, 2024 - Better or Less Bad
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-600 hover:underline" href="#">
                    February 8, 2024 - Organizing Data
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-600 hover:underline" href="#">
                    February 1, 2024 - Long Information
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-600 hover:underline" href="#">
                    January 25, 2024 - Visualization Tools and Learning Resources, January 2024 Roundup
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-600 hover:underline" href="#">
                    January 18, 2024 - Visual Metaphor
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}


function DotChart(props) {
  return (
    <div {...props}>
      <ResponsiveScatterPlot
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

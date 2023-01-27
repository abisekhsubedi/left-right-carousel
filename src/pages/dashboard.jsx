import React from 'react'
import '@tremor/react/dist/esm/tremor.css';
import { Card, Text, Metric, LineChart, ProgressBar, Flex } from "@tremor/react";
import { Spacer } from "@nextui-org/react";
// import './dashboard.css'
// import Dashboard from './dashboard';



export default function Dashboard() {
    return (
        <>
            <Card
                maxWidth="max-w-sm">
                <Text>Sales</Text>
                <Metric>$ 71,465</Metric>
            </Card>
            <Spacer y={2} />
            <Card maxWidth="max-w-sm">
                <Text>Sales</Text>
                <Metric>$ 71,465</Metric>
                <Flex marginTop="mt-4">
                    <Text>32% of annual target</Text>
                    <Text>$ 225,000</Text>
                </Flex>
                <ProgressBar percentageValue={32} marginTop="mt-2" />
            </Card>

            <LineChart
                data={[{}]}
                categories={[]}
                dataKey=""
                colors={["blue"]}
                valueFormatter={null}
                startEndOnly={false}
                showXAxis={true}
                showYAxis={true}
                autoMinValue={false}
                yAxisWidth="w-14"
                showTooltip={true}
                showLegend={true}
                showGridLines={true}
                showAnimation={true}
                height="h-80"
                marginTop="mt-0"
            />
        </>
    )
}

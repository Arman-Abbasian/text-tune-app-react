//libraries
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList } from "recharts";
import BeatLoaderFetch from "./BeatLoaderFetch";
import ErrorText from "./ErrorText";

interface BarchartPropsType {
  data: { x: string; y: number }[];
  chartTitle: string;
  className?: string;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}
export default function Barchart(props: BarchartPropsType) {
  const { data, chartTitle, className, isLoading, isError, refetch } = props;
  return (
    <div className={`w-full ${className}`}>
      <h2 className="text-xl font-bold text-center mb-2 text-secondary-500">
        {chartTitle}
      </h2>
      <ResponsiveContainer
        width="100%"
        height={400}
        className={"p-4 bg-primary-700/30 rounded-lg "}
      >
        {isLoading ? (
          <div className="w-full">
            <BeatLoaderFetch />
          </div>
        ) : isError ? (
          <div>
            <ErrorText refetch={refetch} />
          </div>
        ) : (
          <BarChart
            data={data}
            className="p-4"
            margin={{ top: 40, right: 20, left: 20, bottom: 20 }}
            barCategoryGap={5}
          >
            <XAxis
              dataKey="x"
              stroke="var(--secondary-300)"
              axisLine={false}
              tickLine={false}
            />
            {/* <YAxis dataKey="y" stroke="var(--secondary-900)" /> */}

            <Bar dataKey="y" fill="var(--secondary-500)" barSize={30}>
              <LabelList
                dataKey="y"
                position="top"
                fill="var(--secondary-300)"
              />
            </Bar>
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

import React from "react";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

interface MyClenderProps {
  value: Dayjs;
  mode: CalendarProps<Dayjs>["mode"];
}

const MyClender: React.FC<MyClenderProps> = ({ value, mode }) => {
  console.log(value.format("YYYY-MM-DD"), mode);
  return null; // Or return any other JSX if needed
};

const App: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} />
    </div>
  );
};

export default App; // App is the default export

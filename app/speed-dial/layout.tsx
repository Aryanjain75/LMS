import GlobalSpeedDial from "@/src/GlobalSpeedDial";

export default function SpeedDialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <GlobalSpeedDial />
    </>
  );
}

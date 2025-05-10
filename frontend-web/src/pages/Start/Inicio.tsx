import { ReportsPublished } from "../../components/Reports";
import { WidgetsStart } from "../../components/Widgets";

const Inicio = () => {
  return (
    <main className="min-h-screen text-white p-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          <div className="lg:col-span-3">
            <ReportsPublished />
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6 h-[calc(100vh-3rem)] overflow-y-auto no-scrollbar">
              <WidgetsStart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



export default Inicio;

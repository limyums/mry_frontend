import { Search } from "lucide-react";
import { Department } from "../testdata";
import InstructorsTable from "@/components/Instructors/InstructorsTable";
import "./instructors.scss";

const BASE_CLASS = "instructors";

export default function Instructors() {
  return (
    <>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}_header`}>
          <div className={`${BASE_CLASS}_header_filter`}>
            <div className={`${BASE_CLASS}_header_filter_selector`}>
              <select
                className={`${BASE_CLASS}_header_filter_selector_department`}
              >
                <option value="0" key="department">
                  All Department
                </option>
                {Department.map((item, index) => (
                  <option value={index + 1} key={index + "department"}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className={`${BASE_CLASS}_header_filter_status`}>
              <input type="checkbox" id="active" name="checkbox" />
              <div>Active</div>
              <input type="checkbox" id="finished" name="checkbox" />
              <div>Morning</div>
              <input type="checkbox" id="ongoing" name="checkbox" />
              <div>Afternoon</div>
              <input type="checkbox" id="upcoming" name="checkbox" />
              <div>Evening</div>
              <input type="checkbox" id="upcoming" name="checkbox" />
              <div>Weekend</div>
              <button>
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className={`${BASE_CLASS}_title`}>
          <div> Digital Marketing Instructor </div>
        </div>
        <ul className={`${BASE_CLASS}_table`}>
          <InstructorsTable />
        </ul>
      </div>
    </>
  );
}

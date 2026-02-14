import { useMemo, useState } from 'react';
import { getData } from '../data';
import { Gantt } from '../../src/';
import { Button } from '@svar-ui/react-core';

function GanttScrollToDate({ skinSettings }) {
  const data = useMemo(() => getData(), []);
  const [api, setApi] = useState(null);

  return (
    <div className="wx-ScToDate demo">
      <div className="wx-ScToDate bar">
        <Button onClick={() => api?.scrollToDate(new Date(2026, 3, 8))}>
          Scroll to Apr 8 (center)
        </Button>
        <Button
          onClick={() =>
            api?.scrollToDate(new Date(2026, 3, 15), { align: 'left' })
          }
        >
          Scroll to Apr 15 (left)
        </Button>
        <Button onClick={() => api?.scrollToDate(new Date(2027, 0, 1))}>
          Scroll out of range
        </Button>
      </div>

      <div className="wx-ScToDate gtcell">
        <Gantt
          {...skinSettings}
          init={setApi}
          tasks={data.tasks}
          links={data.links}
          scales={data.scales}
          zoom
        />
      </div>
    </div>
  );
}

export default GanttScrollToDate;

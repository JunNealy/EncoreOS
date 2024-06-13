import TimeDisplay from '../TimeDisplay/TimeDisplay';
import './SystemTray.scss';

const SystemTray = () => {
  return (
    <div className="system-tray">
      <TimeDisplay />
    </div>
  );
};

export default SystemTray;

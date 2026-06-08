import "../styles/routine.css";

export default function RoutineStep({ stepData, isCompleted, onCheck})
{
    return (
        <div className={`routine-step ${isCompleted ? 'completed' : ''}`}>
            <div className="step-time-col">
                <span className="time-badge">{stepData.time}</span>
                <div className="step-line"></div>
            </div>

            <div className="step-card" onClick={onCheck}>
                <div className="step-header">
                    <div className="header-left">
                        <span className="step-type">{stepData.type}</span>
                        <span className="step-freq">{stepData.frequency}</span>
                    </div>
                    <div className={`checkbox-circle ${isCompleted ? "checked" : ""}`}>
                        {isCompleted ? "✔" : ""}
                    </div>
                </div>

                <h3 className="step-product">
                    {stepData.product}
                </h3>
                <p className="step-desc">{stepData.desc}</p>
            </div>
        </div>
    );
}
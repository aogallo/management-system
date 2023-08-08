type ActionsType = {
  actionName: string
  onClick: () => void
  style: string
  icon: JSX.Element | null
}

type TitleContentPropsType = {
  title: string
  actions: ActionsType[] | []
}
function TitleContent({ title, actions }: TitleContentPropsType) {
  return (
    <div className='content-actions'>
      <span className='content-title'>{title}</span>
      <div className='content-actions__buttons'>
        {actions.map((action) => {
          return (
            <>
              <button
                className={`button ${action.style}`}
                onClick={action.onClick}
                key={`${action.actionName}`}
              >
                {action.icon ? action.icon : null}
                <span>{action.actionName}</span>
              </button>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default TitleContent

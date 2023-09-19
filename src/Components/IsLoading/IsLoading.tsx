import style from './IsLoading.module.css';

function IsLoading() {
  return (
    <div className={ style.container }>
      <p>
        Carregando notícias...
      </p>
    </div>
  );
}

export default IsLoading;

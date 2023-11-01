using Microsoft.AspNetCore.Mvc;
using ProActive.API.Data;
using ProActive.API.Models;

namespace ProActive.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public AtividadeController(DataContext context)
        {
            _dataContext = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return _dataContext.Atividades;
        }
        
        [HttpGet("{id}")]
        public Atividade? Get(int id)
        {
            return _dataContext.Atividades.FirstOrDefault(ativ => ativ.Id == id);
        }

        [HttpPost]
        public Atividade? Post(Atividade atividade)
        {
            _dataContext.Atividades.Add(atividade);
            if (_dataContext.SaveChanges() > 0)
                return _dataContext.Atividades.FirstOrDefault(ativ => ativ.Id == atividade.Id);
            else
                throw new Exception("Voce não conseguiu adicionar uma tarefa");
        }

        [HttpPut("{id}")]
        public Atividade? Put(int id, Atividade atividade)
        {
            if (atividade.Id != id)
                throw new Exception("Você esta tentando atualizar a atividade errada");
            _dataContext.Update(atividade);
            if (_dataContext.SaveChanges() > 0)
                return _dataContext.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            else 
                return new Atividade();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
           var atividade = _dataContext.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            if (atividade == null)
                throw new Exception("Você esta tentando deletar uma atividade que não existe");
            _dataContext.Remove(atividade);

            return _dataContext.SaveChanges() > 0;
        }
    }
}

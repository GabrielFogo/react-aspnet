using ProActive.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProActive.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo : IGeralRepo
    {
        Task<Atividade[]> PegaTodasAsync();
        Task<Atividade> PegaPorIdAsync(int id);
        Task<Atividade> PegaPorTituloAsync(string titulo);
    }
}

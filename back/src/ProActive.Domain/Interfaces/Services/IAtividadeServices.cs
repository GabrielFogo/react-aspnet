
using ProActive.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProActive.Domain.Interfaces.Services
{
    public interface IAtividadeServices
    {
        Task<Atividade> AdicionarAtividade(Atividade model);
        Task<Atividade> AtualizarAtividade(Atividade model);

        Task<bool> DeletarAtividade(int atividadeId);
        Task<bool> ConcluirAtividade(Atividade model);

        Task<Atividade[]> PegarTodasAtividadesAsync();
        Task<Atividade> PegarAtividadePorIdAsync(int atividadeId);
    }
}

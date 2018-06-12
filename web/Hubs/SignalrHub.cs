using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ESN.Web.Hubs
{
    public class SignalrHub : Hub
    {
        public Task Send(string message)
        {
            return Clients.All.SendAsync("Send", message);
        }
        public override Task OnConnectedAsync()
        {
            System.Diagnostics.Debug.WriteLine("Connected ===== " + Context.ConnectionId);
            //await Task.Run(() => service.WriteFile("Connected ===== " + Context.ConnectionId));
            //allClient.Add(Context.ConnectionId);
            //_cache.Set("conId", "{id :" + Context.ConnectionId + "}");
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception ex)
        {
            System.Diagnostics.Debug.WriteLine("DisConnected ===== " + Context.ConnectionId);
            //allClient.Remove(Context.ConnectionId);
            //var cc = _cache.Get("conId");
            //if (allClient.Count == 0)
            //{
            //    System.Diagnostics.Debug.WriteLine("===== Logout ===== ");
            //}
            //await Task.Run(() => service.WriteFile("DisConnected ===== " + Context.ConnectionId));
            //await service.writeFile("DisConnected ===== " + Context.ConnectionId);
            return base.OnDisconnectedAsync(ex);
        }
    }
}

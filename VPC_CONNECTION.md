# Seesion Manager
1. Start EC2 instance
2. Connect using EC2 connect
3. sudo snap start amazon-ssm-agent
4. sudo snap services amazon-ssm-agent

# VPN

1. Create vpc
2. Create arn certificate. Use client ipv4 cidr: 192.168.0.0/22
3. Create aws cognito identity pool an user pool
4. Add SAML (click on Social and custom providers)
4. Create client vpn endpoint, choose cognito for authentication
5. Associate target network
6. Install vpn client: https://docs.aws.amazon.com/vpn/latest/clientvpn-user/client-vpn-connect-linux.html#client-vpn-connect-linux-install

The vpn endpoint will cost about 1.5 gbp a day and can't be paused even if they have no associated target.
# 클러스터 아키텍처, 설치 및 구성 [25%]

#### 목적
---
- 쿠버네티스 클러스터는 **어떤 사용자와 어떤 프로세스가 개체를 관리할 수 있는지 제어하는 보안 정책**을 사용해야한다.
- RBAC은 **사용자 (User, Group, Service Accounts) 를 특정 개체에 허용되는 작업에 매핑**하는 API 리소스를 제공한다.
- Rule은 API 리소스 유형인 `Role`, `ClusterRole`, `RoleBinding` 및 `ClusterRoleBinding`을 사용하여 **네임스페이스**와 **클러스터** 수준에서 정의할 수 있다.

<br>

#### 필수 개념
---

- [역할 기반 액세스 제어(RBAC)](1_RBAC.md)
- [`Kubeadm`을 사용하여 클러스터 설치](2_Cluster_Installation.md)
- [`Kubeadm`을 사용하여 클러스터 업그레이드](3_Version_Upgrade.md)
- [`etcdtl`을 사용하여 etcd database 백업 및 복원](4_Etcd_backup_Restoring.md)
- [고가용성 쿠버네티스 클러스터 이해](5_Cluster_HA.md)
